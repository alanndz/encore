![ENCORE_HERO](./img/banner.jpg)
# Encore Tweaks
**Encore Tweaks**. A performance magisk module with automated performance profile.

## Features:
```
- Automatic performance script
- GUI Settings via KernelSU's Module WebUI
- Three Performance mode: Performance, Normal, And Powersave
- Reduces Jitter and Latency
- Universal SoC Support
- Complete CPU, CPU BUS, GPU, and DRAM Frequency scaling for Snapdragon, Mediatek, Google Tensor, Exynos, and Unisoc
- Disables logd (if enabled in webui)
- Mediatek tailored parameter settings
- Schedulers, I/O and Network tweaks
- Disables SPI CRC
- Allows sched boosting on top-app tasks (Thx to tytydraco)
- Sets highest priority for Games and most essential processes
- Uses Google's schedutil rate-limits from Pixel 3
```

## How Encore Tweaks works under the hood
Encore Tweaks is fully automatic while comes to performance mode. Service will choose the mode according to this 3 rules:

### Performance Mode
Service will continuously checking any apps or games that listed on Gamelist and If user open any of it, service will apply performance script. this included various kernel parameters, CPU, CPU Bus, GPU, and DRAM frequencies will be locked to highest possible OPP. This mode will be maintained until the user closes the game.

### Powersave Mode
If user enables battery saver mode (except while charging), service will apply normal mode then powersave script. powersave mode will lock GPU and DRAM frequencies to lowest possible OPP for saving power. ***This mode cannot override performance mode.***

### Normal Mode
If any of criteria on above not satisfied, service will apply normal mode. this mode will restore any restrictions and tweaks in 2 of other modes.

## Notes:
- I don't recommend comboing this module with any gayming modules except Thermal Mod.

## How to flash:
- Just flash in magisk/kernelsu/apatch and reboot
- And that's it ;)

## How to Contribute:
- Fork the Repo
- Edit tweaks according to your info/docs
- Prettier the code using shfmt and clang-format (Google style)
- Commit with proper name and info/docs about what you did
- Test the change you did and check if eveything it's fine
- Then make a pull request

## Special Credits
- tytydraco for KTweaks
- NotZeetaa for YAKT
- ~~RiProG for App Monitoring~~
- @rsuntk for JNI and arm32 support
- Our contributor
