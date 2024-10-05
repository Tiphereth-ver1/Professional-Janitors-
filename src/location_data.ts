// location_data.ts
//let message be the message that is sent
let message: string = "23435V[1.3]B[0003266717]D[0000-00-00T00:00:00]L[0.000,0.000,600.0]I[1]R[314.953583,-11.333508,6.500096]A[-0.264000,-0.042000,0.959000]G[-10.465000,-83.466003,15.338000]IR[0,0000000000]E[TFF] @@ RD[0000-01-01T00:53:38]IL";

// Function to extract data
export function extractData(message: string) {
    const messageId = message.match(/\d+/)?.[0];
    const location = message.match(/L\[(.*?)\]/)?.[1];
    const rotation = message.match(/R\[(.*?)\]/)?.[1];
    const gyroscopic_acceleration = message.match(/G\[(.*?)\]/)?.[1];

    return {
        messageId,
        location: location?.split(',').map(Number),
        rotation: rotation?.split(',').map(Number),
        acceleration: gyroscopic_acceleration?.split(',').map(Number)
    };
}

// Function to refresh the data
export function refreshData() {
    // Here you can modify the `message` variable as needed
    // We want for new data, new message to be assigned here.
    return extractData(message);
}


