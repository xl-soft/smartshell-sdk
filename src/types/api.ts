/**
 * # type `ShellApiVHost`
 *
 * Represents the virtual host options for SmartShell API
 * 
 * For any admin-related workflow use `billing` vhost
 * For any client-related workflow use `mobile-auth` vhost
 * 
 * Use of `host` vhost is highly not recommended
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export type ShellApiVHost = 'billing' | 'host' | 'mobile-auth'

/**
 * # type `ShellApiEndpoint`
 * 
 * Full https path for graphql endpoint
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export type ShellApiEndpoint = `https://${ShellApiVHost}.smartshell.gg/api/graphql`

/**
 * # interface `ShellApiCredentialsToken`
 *
 * Credentials variant for permanent access tokens
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
// export type ShellApiCredentialsToken = string

/**
 * # interface `ShellApiCredentialsUser`
 *
 * Credentials variant for user login
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export interface ShellApiCredentialsUser {
    login: string
    password: string
}

/**
 * # interface `ShellApiCredentials`
 *
 * Credentials input data
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export type ShellApiCredentials = ShellApiCredentialsUser //| ShellApiCredentialsToken 

/**
 * # interface `ShellApiOptions`
 *
 * Constructor options for `ShellApi` class
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export interface ShellApiOptions {
    credentials?: ShellApiCredentials 
    anonymous?: boolean
    host?: ShellApiVHost
    club?: number
}

/**
 * # interface `ShellApiClub`
 *
 * Interface that storing credentials for fast club relogin
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export interface ShellApiClub { 
    id: number
    access_token: string
    refresh_token: string
    expires: number
}

/**
 * # interface `ShellApiResponseError `
 * 
 * Type for graphql error response
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */

export interface ShellApiResponseError {
    message: string
    path?: string[]
    locations: { line: number, column: number }[]
    extensions: { code: number }
}

/**
 * # interface `ShellApiResponse<T>`
 * 
 * Type for graphql response from smartshell api
 * 
 * `@xlsoftware/smartshell-sdk/types`
 */
export interface ShellApiResponse<T> {
    data: T
    errors?: ShellApiResponseError[]
    extensions?: {
        "x-trace-id": string
    }
}