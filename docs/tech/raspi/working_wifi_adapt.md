---
tags:
  - raspberry-pi
  - wifi
  - linux
  - "#Networking"
title: Working Wi-Fi Adapters
---
---
# Working Wi-Fi Adapters
- [Which wifi dongle is guaranteed to work with raspAP? : RaspAP](https://www.reddit.com/r/RaspAP/comments/ttm0nt/which_wifi_dongle_is_guaranteed_to_work_with/)
- [morrownr/USB-WiFi: USB WiFi Adapter Information for Linux](https://github.com/morrownr/USB-WiFi) 

---
## The Short List
### Superstar USB Wi-Fi adapters for Linux
Note: [The Plug and Play List](https://github.com/morrownr/USB-WiFi/blob/main/home/USB_WiFi_Adapters_that_are_supported_with_Linux_in-kernel_drivers.md) has many more adapters listed as well as reviews and links to online sources.

-----

```
Adapter                      Chipset  / Class   / Bands          USB  WPA3  Range      State [5]
```

-----

```
ALFA AWUS036AXML             mt7921au / AXE3000 / 2.4, 5, 6      USB3 Yes   Long       Single

Netgear A8000                mt7921au / AXE3000 / 2.4, 5, 6      USB3 Yes   Long       Single

```
-----

```
ALFA AWUS036ACM [1] [2]      mt7612u / AC1200   / 2.4, 5         USB3 Yes   Long       Single

TEROW ROW02CD [1] [2]        mt7612u / AC1200   / 2.4, 5         USB3 Yes   Long       Single

```

-----

```
ALFA AWUS036ACU [1] [6]      rtl8812bu / AC1200   / 2.4, 5       USB3 Yes   Long       Single
```


-----

```
ALFA AWUS036ACHM [1] [2] [3] mt7610u / AC600    / 2.4, 5         USB2 Yes   Very Long  Single

Panda PAU0B                  mt7610u / AC600    / 2.4, 5         USB2 Yes   Long       Single

Linksys AE6000 [1]           mt7610u / AC580    / 2.4, 5         USB2 Yes   Medium     Single

```

-----

```
Panda PAU09                  rt5572  / N600     / 2.4, 5         USB2 Yes   Long       Single

```
-----

```
Panda PAU03 [1] (nano)       rt5370  / N150     / 2.4            USB2 Yes   Short      Single

Panda PAU04                  rt5370  / N150     / 2.4            USB2 Yes   Medium     Single

CanaKit BC19675              rt5370  / N150     / 2.4            USB2 Yes   Short      Single

EDUP EP-MS8551 [1] [4]       mt7601u / N150     / 2.4            USB2 Yes   Very Long  Single

Zibo-6467115 [1] [4] (nano)  mt7601u / N150     / 2.4            USB2 Yes   Short      Single

ALFA AWUS036NHA              ar9271  / N150     / 2.4            USB2 Yes   Long       Single

WiFi Nation WN-H3            ar9271  / N150     / 2.4            USB2 Yes   Long       Single

Panda PAU08 [1]              rt3070  / N150     / 2.4            USB2 Yes   Very Long  Single
```

-----

```
[1] I have first hand experience with this adapter.
[2] Excellent for 5 GHz AP mode (works well with a Raspberry Pi 4B)
[3] Outstanding for 2.4 GHz AP mode
[4] Use only for client (managed) mode. No AP mode. Limited monitor mode.
[5] Single state is preferred.
[6] In-kernel driver available with kernel 6.3 or later.

Criteria to make The Short List: 

1. Uses an In-kernel driver (adapter is plug and play).
2. Has either a documented track record or my own testing experience.
3. Is available to purchase as a new product.

USB WiFi adapters come in various shapes, sizes and speeds. Their capabilities
can vary greatly. The adapter that you pick needs to be chosen based on its
ability to do the job that you need it to do.
```
