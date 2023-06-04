export interface RefreshTokenResponse {
	access_token: string;
	access_token_expires: number;
	credentials: string;
	append_password: number;
	version: string;
	apiversion: string;
}