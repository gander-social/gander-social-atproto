# GNDR appview service

This is the service entrypoint for the GNDR appview. The entrypoint command should run `api.js` with node, e.g. `node api.js`. The following env vars are supported:

- `GNDR_PUBLIC_URL` - (required) the public url of the appview, e.g. `https://api.gndr.app`.
- `GNDR_DID_PLC_URL` - (required) the url of the PLC service used for looking up did documents, e.g. `https://plc.directory`.
- `GNDR_DATAPLANE_URL` - (required) the url where the backing dataplane service lives.
- `GNDR_SERVICE_SIGNING_KEY` - (required) the public signing key in the form of a `did:key`, used for service-to-service auth. Advertised in the appview's `did:web` document.
- `GNDR_ADMIN_PASSWORDS` - (alt. `GNDR_ADMIN_PASSWORD`) (required) comma-separated list of admin passwords used for role-based auth.
- `NODE_ENV` - (recommended) for production usage, should be set to `production`. Otherwise all responses are validated on their way out. There may be other effects of not setting this to `production`, as dependencies may also implement debug modes based on its value.
- `GNDR_VERSION` - (recommended) version of the GNDR service. This is advertised by the health endpoint.
- `GNDR_PORT` - (recommended) the port that the service will run on.
- `GNDR_IMG_URI_ENDPOINT` - (recommended) the base url for resized images, e.g. `https://cdn.gndr.app/img`. When not set, sets-up an image resizing service directly on the appview.
- `GNDR_SERVER_DID` - (recommended) the did of the appview service. When this is a `did:web` that matches the appview's public url, a `did:web` document is served.
- `GNDR_HANDLE_RESOLVE_NAMESERVERS` - alternative domain name servers used for handle resolution, comma-separated.
- `GNDR_BLOB_CACHE_LOC` - when `GNDR_IMG_URI_ENDPOINT` is not set, this determines where resized blobs are cached by the image resizing service.
- `GNDR_COURIER_URL` - URL of courier service.
- `GNDR_COURIER_API_KEY` - API key for courier service.
- `GNDR_BSYNC_URL` - URL of bsync service.
- `GNDR_BSYNC_API_KEY` - API key for bsync service.
- `GNDR_SEARCH_URL` - (alt. `GNDR_SEARCH_ENDPOINT`) -
- `GNDR_LABELS_FROM_ISSUER_DIDS` - comma-separated list of labelers to always use for record labels.
- `MOD_SERVICE_DID` - the DID of the mod service, used to receive service authed requests.
