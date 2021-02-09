var docData = {"packages":[{"isSingleFile":false,"name":"lang.table","orgName":"ballerina","version":"0.4.0","description":"","summary":"This module provides lang library operations on \"table\" values defined by the language specification 2020R1.","modules":[{"id":"lang.table","summary":"This module provides lang library operations on \"table\" values defined by the language specification 2020R1.","description":"## Module Overview\n\nThis module provides lang library operations on `table` values defined by the language specification 2020R1.","orgName":"ballerina","version":"0.4.0","records":[],"classes":[],"abstractObjects":[],"clients":[],"listeners":[],"functions":[{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":true,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"arrayDimensions":0,"returnType":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type1","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"func","description":"a function to apply to each member\n","isDeprecated":false}],"returnParameters":[{"type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"new table containing result of applying `func` to each member\n","isDeprecated":false}],"name":"\u0027map","description":"Applies a function each member of a table and returns a table of the result.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"val","description":"the member\n","isDeprecated":false}],"returnParameters":[],"name":"add","description":"Adds a member `val` to table `t`.\nIt will be added as the last member.\nIt panics if `val` has the same key as an existing member of `t`,\nor if `val` is inconsistent with the inherent type of `t`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":true,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"arrayDimensions":0,"returnType":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"func","description":"a predicate to apply to each member to test whether it should be included\n","isDeprecated":false}],"returnParameters":[{"type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"new table containing members for which `func` evaluates to true\n","isDeprecated":false}],"name":"filter","description":"Selects the members from a table for which a function returns true.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":true,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"arrayDimensions":0,"returnType":{"name":"() ","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"func","description":"a function to apply to each member\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"() ","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"forEach","description":"Applies a function to each member of a table.\nThe `func` is applied to each member of `t`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"KeyType","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"k","description":"the key\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"member with key `k`\n","isDeprecated":false}],"name":"get","description":"Returns the member of table `t` with key `k`.\nThis for use in a case where it is known that the table has a specific key,\nand accordingly panics if `t` does not have a member with key `k`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"KeyType","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"k","description":"the key\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"boolean","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"true if `t` has a member with key `k`\n","isDeprecated":false}],"name":"hasKey","description":"Tests whether `t` has a member with key `k`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":false,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"object {\n    public isolated function next() returns record {|\n        Type value;\n    |}?;\n} ","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"a new iterator object that will iterate over the members of `t`\n","isDeprecated":false}],"name":"iterator","description":"Returns an iterator over a table.\nThe iterator will iterate over the members of the table not the keys.\nThe `entries` function can be used to iterate over the keys and members together.\nThe `keys` function can be used to iterator over just the keys.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"KeyType","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"","description":"a new list of all keys\n","isDeprecated":false}],"name":"keys","description":"Returns a list of all the keys of table `t`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"number of members in `t`\n","isDeprecated":false}],"name":"length","description":"Returns number of members of a table.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table with a key of type int\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"int","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"an integer not yet used as a key\nThis is maximum used key value + 1, or 0 if no key used\nXXX should it be 0, if the maximum used key value is \u003c 0?\nProvides similar functionality to auto-increment\n","isDeprecated":false}],"name":"nextKey","description":"Returns the next available integer key.\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"val","description":"the member\n","isDeprecated":false}],"returnParameters":[],"name":"put","description":"Adds a member `val` to table `t`, replacing any member with the same key value.\nIf `val` replaces an existing member, it will have the same position\nin the order of the members as the existing member;\notherwise, it will be added as the last member.\nIt panics if `val` is inconsistent with the inherent type of `t`.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":true,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type1","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"arrayDimensions":0,"returnType":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type1","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"func","description":"combining function\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type1","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"initial","description":"initial value for the first argument of combining `func`\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type1","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"result of combining the members of `t` using `func`\n","isDeprecated":false}],"name":"reduce","description":"Combines the members of a table using a combining function.\nThe combining function takes the combined value so far and a member of the table,\nand returns a new combined value.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"KeyType","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"k","description":"the key\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"the member of `t` that had key `k`\nThis removed the member of `t` with key `k` and returns it.\nIt panics if there is no such member.\n","isDeprecated":false}],"name":"remove","description":"Removes a member of a table.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false}],"returnParameters":[{"type":{"name":"() ","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"","isDeprecated":false}],"name":"removeAll","description":"Removes all members of a table.\nThis panics if any member cannot be removed.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false},{"defaultValue":"","type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"KeyType","category":"not_found","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"k","description":"the key\n","isDeprecated":false}],"returnParameters":[{"type":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":true,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"","description":"the member of `t` that had key `k`, or `()` if `t` does not have a key `k`\nIf `t` has a member with key `k`, it removes and returns it;\notherwise it returns `()`.\n","isDeprecated":false}],"name":"removeIfHasKey","description":"Removes a member of a table with a given key, if the table has member with the key.\n\n","isDeprecated":false},{"isIsolated":true,"isRemote":false,"isExtern":true,"parameters":[{"defaultValue":"","type":{"category":"UNKNOWN","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},"name":"t","description":"the table\n","isDeprecated":false}],"returnParameters":[{"type":{"isAnonymousUnionType":false,"isArrayType":true,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":1,"elementType":{"orgName":"ballerina","moduleName":"lang.table","version":"0.4.0","name":"Type","category":"errors","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}},"name":"","description":"an array whose members are the members of `t`\n","isDeprecated":false}],"name":"toArray","description":"Returns a list of all the members of a table.\n\n","isDeprecated":false}],"constants":[],"annotations":[],"errors":[],"types":[{"name":"Type","description":"A type parameter that is a subtype of `any|error`.\nHas the special semantic that when used in a declaration\nall uses in the declaration must refer to same type.\n","isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"any","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0},{"name":"Type1","description":"A type parameter that is a subtype of `any|error`.\nHas the special semantic that when used in a declaration\nall uses in the declaration must refer to same type.\n","isAnonymousUnionType":true,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[{"name":"any","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0},{"name":"error","category":"builtin","isAnonymousUnionType":false,"isArrayType":false,"isNullable":false,"isTuple":false,"isIntersectionType":false,"isParenthesisedType":false,"isTypeDesc":false,"isRestParam":false,"isLambda":false,"isReadOnly":false,"isDeprecated":false,"generateUserDefinedTypeLink":true,"memberTypes":[],"paramTypes":[],"arrayDimensions":0}],"paramTypes":[],"arrayDimensions":0}],"enums":[]}]}]};