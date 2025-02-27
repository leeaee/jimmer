package org.babyfish.jimmer.dto.compiler;

import org.antlr.v4.runtime.Token;
import org.babyfish.jimmer.dto.compiler.spi.BaseProp;
import org.babyfish.jimmer.dto.compiler.spi.BaseType;

import java.util.*;

class CompilerContext<T extends BaseType, P extends BaseProp> {

    private final DtoCompiler<T, P> compiler;

    private final Importing importing;

    private final Map<String, DtoTypeBuilder<T, P>> typeBuilderMap = new LinkedHashMap<>();

    public CompilerContext(DtoCompiler<T, P> compiler) {
        this.compiler = compiler;
        this.importing = new Importing(this);
    }

    public DtoTypeBuilder<T, P> get(String name) {
        return typeBuilderMap.get(name);
    }

    public void importStatement(DtoParser.ImportStatementContext statement) {
        importing.add(statement);
    }

    public DtoTypeBuilder<T, P> add(DtoParser.DtoTypeContext type) {
        String name = type.name.getText();
        if (typeBuilderMap.containsKey(name)) {
            throw exception(
                    type.name.getLine(),
                    "Duplicated dto type name \"" +
                            name +
                            "\""
            );
        }
        EnumSet<DtoTypeModifier> modifiers = EnumSet.noneOf(DtoTypeModifier.class);
        for (Token modifier : type.modifiers) {
            DtoTypeModifier dtoTypeModifier;
            switch (modifier.getText()) {
                case "abstract":
                    dtoTypeModifier = DtoTypeModifier.ABSTRACT;
                    break;
                case "input":
                    if (modifiers.contains(DtoTypeModifier.INPUT_ONLY)) {
                        throw exception(
                                modifier.getLine(),
                                "'input' and 'inputOnly' cannot used together"
                        );
                    }
                    dtoTypeModifier = DtoTypeModifier.INPUT;
                    break;
                case "inputOnly":
                case "input-only":
                    if (modifiers.contains(DtoTypeModifier.INPUT)) {
                        throw exception(
                                modifier.getLine(),
                                "'input' and 'inputOnly' cannot used together"
                        );
                    }
                    dtoTypeModifier = DtoTypeModifier.INPUT_ONLY;
                    break;
                default:
                    throw exception(
                            modifier.getLine(),
                            "If the modifier of dto type is specified, it must be " +
                                    "'abstract', 'input', 'inputOnly' or 'input-only'"
                    );
            }
            if (!modifiers.add(dtoTypeModifier)) {
                throw exception(
                        modifier.getLine(),
                        "Duplicated modifier \"" + modifier.getText() + "\""
                );
            }
        }
        Set<String> superSet = new LinkedHashSet<>();
        for (Token superName : type.superNames) {
            if (!superSet.add(superName.getText())) {
                throw exception(
                        superName.getLine(),
                        "Duplicated super dto name \"" + superName.getText() + "\""
                );
            }
        }
        DtoTypeBuilder<T, P> typeBuilder = new DtoTypeBuilder<>(
                null,
                compiler.getBaseType(),
                type.body,
                type.name,
                type.annotations,
                modifiers,
                type.superNames,
                null,
                null,
                this
        );
        typeBuilderMap.put(name, typeBuilder);
        return typeBuilder;
    }

    public List<DtoType<T, P>> getDtoTypes() {
        List<DtoType<T, P>> types = new ArrayList<>(typeBuilderMap.size());
        for (DtoTypeBuilder<T, P> builder : typeBuilderMap.values()) {
            DtoType<T, P> type = builder.build();
            if (!builder.isAbstract()) {
                types.add(type);
            }
        }
        return types;
    }

    public Map<String, P> getProps(T baseType) {
        return compiler.getProps(baseType);
    }

    public Map<String, P> getDeclaredProps(T baseType) {
        return compiler.getDeclaredProps(baseType);
    }

    public boolean isImplicitId(P baseProp, Set<DtoTypeModifier> modifiers) {
        if (modifiers.contains(DtoTypeModifier.INPUT) || modifiers.contains(DtoTypeModifier.INPUT_ONLY)) {
            return baseProp.isId() && compiler.isGeneratedValue(baseProp);
        }
        return false;
    }

    public T getTargetType(P baseProp) {
        return compiler.getTargetType(baseProp);
    }

    public String getDtoFilePath() {
        return compiler.getDtoFilePath();
    }

    public T getBaseType() {
        return compiler.getBaseType();
    }

    public List<String> getEnumConstants(P baseProp) {
        return compiler.getEnumConstants(baseProp);
    }

    public TypeRef resolve(DtoParser.TypeRefContext ctx) {
        return importing.resolve(ctx);
    }

    public String resolve(DtoParser.QualifiedNameContext ctx) { return importing.resolve(ctx); }

    public String resolve(String qualifiedName, int qualifiedNameLine) {
        return importing.resolve(qualifiedName, qualifiedNameLine);
    }
    
    public DtoAstException exception(int line, String message) {
        return compiler.exception(line, message);
    }
}
