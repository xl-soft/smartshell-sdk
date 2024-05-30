export type TypeRef = {
    name: string
    kind: string
    ofType: TypeRef
} | null

export interface Field {
    name: string
    type: TypeRef
}

export interface Enum {
    name: string
}

export interface Type {
    name: string
    kind: string
    enumValues: Enum[]
    possibleTypes: Enum[]
    fields: Field[]
    inputFields: Field[]
}


export interface Method {
    name: string
    args: Field[]
    type: TypeRef
    isDeprecated: boolean
    deprecationReason?: string
}

export interface IntrospectQuery {
    types: Type[]
    queryType: Method[]
    mutationType: Method[]
}

export interface RequestField {
    name: string,
    entity?: {
        name: string
        fields: RequestField[]
    }[]
    nested?: RequestField
}

export interface Request {
    type: 'query' | 'mutation',
    name: string,
    props: {
        required: boolean
        framed: boolean 
        paginated: boolean
    }
    response: {
        type: string
        array: boolean
    }
    fields: RequestField[]
}