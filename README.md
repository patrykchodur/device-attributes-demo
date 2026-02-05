# Device Attributes Demo

This is a demo [Isolated Web App](https://github.com/WICG/isolated-web-apps/) showing the [Device Attributes API](https://wicg.github.io/WebApiDevice/device_attributes/).

## Device Attributes API

The Device Attributes API, available for [policy-installed IWAs](https://chromeenterprise.google/policies/#IsolatedWebAppInstallForceList) on [managed ChromeOS devices](https://support.google.com/chrome/a/answer/1289314?hl=en#), for [web apps in kiosk mode](https://support.google.com/chrome/a/answer/9273974?sjid=302647660509390351-EU), and for [dev mode installed IWAs](https://chromeos.dev/en/web/isolated-web-apps#packaged), allows the developers to view basic informations about the managed device, namely
- Annotated Asset ID - `navigator.managed.getAnnotatedAssetId()`
- Annotated Location - `navigator.managed.getAnnotatedLocation()`
- Directory ID - `navigator.managed.getDirectoryId()`
- Hostname - `navigator.managed.getHostname()`
- Serial Number - `navigator.managed.getSerialNumber()`

For a detailed description of these properties please refer to the [Device Attributes API Specification](https://wicg.github.io/WebApiDevice/device_attributes).

To use the API, the app needs to allow the `device-attributes` permission in the permissions policy. For Isolated Web Apps, this means an appropriate entry in the web manifest (see `public/.well-known/manifest.webmanifest`).

## Installing the app

This app can be installed with the following update manifest.
```
https://device-attr-demo-46062235.web.app/releases/update_manifest.json
```
The easiest way to install the app is via the `chrome://web-app-internals` page with the `chrome://flags/#enable-isolated-web-app-dev-mode` flag enabled.

## Building the app from the source code

To build the signed web bundle, the user needs to create a `.env` file in the project's directory. It can be done with the following command
```
cat << EOF > .env                                                                                                                                                                     
SIGNING_KEY="$(openssl genpkey -algorithm Ed25519)"
EOF
```

After that, the signed bundle can be built with
```
pnpm install && pnpm run build:release
```
The signed web bundle will appear in the `dist/releases` directory.
