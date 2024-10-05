"use strict";
// location_data.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractData = extractData;
exports.refreshData = refreshData;
var message = "23435V[1.3]B[0003266717]D[0000-00-00T00:00:00]L[0.000,0.000,600.0]I[1]R[314.953583,-11.333508,6.500096]A[-0.264000,-0.042000,0.959000]G[-10.465000,-83.466003,15.338000]IR[0,0000000000]E[TFF] @@ RD[0000-01-01T00:53:38]IL";
// Function to extract data
function extractData(message) {
    var _a, _b, _c, _d;
    var messageId = (_a = message.match(/\d+/)) === null || _a === void 0 ? void 0 : _a[0];
    var location = (_b = message.match(/L\[(.*?)\]/)) === null || _b === void 0 ? void 0 : _b[1];
    var rotation = (_c = message.match(/R\[(.*?)\]/)) === null || _c === void 0 ? void 0 : _c[1];
    var gyroscopic_acceleration = (_d = message.match(/G\[(.*?)\]/)) === null || _d === void 0 ? void 0 : _d[1];
    return {
        messageId: messageId,
        location: location === null || location === void 0 ? void 0 : location.split(',').map(Number),
        rotation: rotation === null || rotation === void 0 ? void 0 : rotation.split(',').map(Number),
        acceleration: gyroscopic_acceleration === null || gyroscopic_acceleration === void 0 ? void 0 : gyroscopic_acceleration.split(',').map(Number)
    };
}
// Function to refresh the data
function refreshData() {
    // Here you can modify the `message` variable as needed
    // For demonstration, we'll just return the extracted data from the existing message
    return extractData(message);
}
