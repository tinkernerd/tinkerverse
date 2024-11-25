export const TCPTable = {
  url: "https://raw.githubusercontent.com/tinkernerd/tinkerverse/refs/heads/main/docs/net/assets/tcp.json",
  cols: [
    { text: "Port" },
    { text: "Protocol" },
    { text: "Description" },
  ],
  mapper: (rawData: any[]) =>
    rawData.map((item) => ({
      Port: item.port,
      Protocol: item.protocol,
      Description: item.description,
    })),
};

export const UDPTable = {
  url: "https://raw.githubusercontent.com/tinkernerd/tinkerverse/refs/heads/main/docs/net/assets/udp.json",
  cols: [
    { text: "Port" },
    { text: "Protocol" },
    { text: "Description" },
  ],
  mapper: (rawData: any[]) =>
    rawData.map((item) => ({
      Port: item.port,
      Protocol: item.protocol,
      Description: item.description,
    })),
};
