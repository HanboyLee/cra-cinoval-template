// example
export const ACCESS_TOKEN = "accessToken";
export const REFRESH_TOKEN = "refreshToken";
// export const API_URL = 'http://192.168.10.190:9002';
export const API_TIMEOUT = 60000;
export const CURRENT_LOCALE =
	navigator.languages && navigator.languages.length
		? navigator.languages[0]
		: navigator.language;

// themes
export const themeConstant = {
	primaryColor: "@primary-color",
	linkColor: "@link-color",
	successColor: "@success-color",
	warningColor: "@warning-color",
	errorColor: "@error-color",
	fontSizeBase: "@font-size-base",
	headingColor: "@heading-color",
	textColor: "@text-color",
	textColorSecondary: "@text-color-secondary",
	//   textColorLight: '@text-color-light',
	disabledColor: "@disabled-color",
	borderRadiusBase: "@border-radius-base",
	borderColorBase: "@border-color-base",
	boxShadowBase: "@box-shadow-base",
};
