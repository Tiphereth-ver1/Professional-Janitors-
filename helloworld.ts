function extractData(message: string) {
    const messageId = message.match(/Message\s*(\d+)/)?.[1];
    const location = message.match(/L\[(.*?)\]/)?.[1];
    const rotation = message.match(/R\[(.*?)\]/)?.[1];
    const gyroscopic_acceleration = message.match(/G\[(.*?)\]/)?.[1];

    return {
        messageId,
        location: location?.split(',').map(Number),
        rotation: rotation?.split(',').map(Number),
        gravity: gyroscopic_acceleration?.split(',').map(Number)
    };
}