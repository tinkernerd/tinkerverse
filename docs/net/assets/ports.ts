import type { SearchTableLinks } from '@theme/data/types';


// --------------------------------
// Search Tables
export const TCPTable: SearchTableLinks[] = [
    {
        url: 'https://raw.githubusercontent.com/tinkernerd/tinkerverse/refs/heads/main/docs/net/assets/tcp.json',
        cols: [
            { text: 'Port' },
            { text: 'Description' },
            { text: 'Protocol'}
        ],
    }
];
export const UDPTable: SearchTableLinks[] = [
    {
        url: 'https://raw.githubusercontent.com/tinkernerd/tinkerverse/refs/heads/main/docs/net/assets/udp.json',
        cols: [
            { text: 'Port' },
            { text: 'Description' },
            { text: 'Protocol'}
        ],
    }
];