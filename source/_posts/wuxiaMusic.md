---
title: 天涯明月刀手游自动弹琴
date: 2020-10-28 23:18:26
modified: 2020-10-28 23:19:44
categories: 
- web前端
tags:
 - javaScript
 - 游戏脚本
 - autojs
 - 天刀手游琴谱
---

> 基于autojs实现的弹琴自助脚本（可自定义）

<!-- more -->

- 官方文档 [https://hyb1996.github.io/AutoJs-Docs/#/](https://hyb1996.github.io/AutoJs-Docs/#/)
- GitHub [https://github.com/hyb1996/AutoJs-Docs](https://github.com/hyb1996/AutoJs-Docs)

# 打开开发者模式

> 如下图所示打开指针位置

![服务器开小差了-_-!](/assets/blogImg/point.jpg) 

# 获取设备坐标

> 打开游戏，获取按键坐标，需要（高宫，高商，宫）三个位置坐标

![服务器开小差了-_-!](/assets/blogImg/musicPoint.jpg) 


# 打开软件设置参数

> 注：坐标设置完成后需要点击确定生效

# 设置完成点击确定，出现悬浮按钮【开始】

# 进入游戏，打开自由演奏点击开始即可

# 下载地址

- [点击下载](https://xhxiehuan.club/assets/file/wuxiamusic.apk)


# autojs实现源码

```
"ui";

ui.layout(
    <vertical padding="16">
        <text text="请输入三个按键坐标[高宫,高商,中高](逗号隔开)" textColor="black" textSize="16sp" marginTop="16" />
        <horizontal>
            <input id="x_b1" text="450,763" />
            <input id="x_b2" text="725,763" />
            <input id="x_b3" text="450,875" />
            <button id="x_b" text="确定" w="60" style="Widget.AppCompat.Button.Colored" />
        </horizontal>
        <horizontal>
            <text text="bpm" textColor="black" textSize="16sp" marginRight="16" />
            <input id="bpm" w="30" inputType="number" text="80" marginRight="12" />

            <text text="beat_n" textColor="black" textSize="16sp" marginRight="16" />
            <input id="beat_n" w="30" inputType="number" text="4" marginRight="12" />

            <text text="beat_m" textColor="black" textSize="16sp" marginRight="16" />
            <input id="beat_m" w="30" inputType="number" text="4" />
        </horizontal>
        <horizontal>
            <text textSize="16sp">选择琴谱</text>
            <spinner id="sp1" entries="自定义|欢乐斗地主" spinnerMode="dialog" />
        </horizontal>

        <text text="琴谱输入(空拍使用'_'代替)" textColor="black" textSize="16sp" marginTop="16" />
        <input id="musicWuXia" hint="请输入琴谱" lines="3" />
        <horizontal>
            <text textSize="16sp">选择音符</text>
            <spinner id="sp2" entries="2分音符|4分音符|6分音符|8分音符|10分音符|12分音符|14分音符|16分音符" spinnerMode="dialog" />
        </horizontal>
        <vertical>
            <horizontal>
                <button id="x_1" text="1" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_2" text="2" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_3" text="3" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_4" text="4" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_5" text="5" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_6" text="6" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_7" text="7" w="40" style="Widget.AppCompat.Button.Colored" />
            </horizontal>
            <horizontal>
                <button id="x_Q" text="Q" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_W" text="W" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_E" text="E" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_R" text="R" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_T" text="T" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_Y" text="Y" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_U" text="U" w="40" style="Widget.AppCompat.Button.Colored" />
            </horizontal>
            <horizontal>
                <button id="x_A" text="A" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_S" text="S" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_D" text="D" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_F" text="F" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_G" text="G" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_H" text="H" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x_J" text="J" w="40" style="Widget.AppCompat.Button.Colored" />
                <button id="x__" text="空" w="40" style="Widget.AppCompat.Button.Colored" />
            </horizontal>
        </vertical>

        <button id="ok" text="确定" w="auto" style="Widget.AppCompat.Button.Colored" />
        <text text="bpm: 是控制弹奏速度的参数，值越大，速度越快" textColor="black" textSize="16sp" marginTop="14" />
        <text text="beat_n:	为拍号的分子，表示一小节（标准谱中每一小节使用竖线隔开）有多少拍" textColor="black" textSize="14sp" marginTop="14" />
        <text text="beat_m:	beat_m为拍号的分母，表示四分音符为一拍" textColor="black" textSize="16sp" marginTop="14" />
    </vertical>
);

//手机坐标，默认 2400 * 1080
let keyCode = {
    "_": [0, 763],
    "1": [450, 763],
    "2": [725, 763],
    "3": [1000, 763],
    "4": [1275, 763],
    "5": [1550, 763],
    "6": [1825, 763],
    "7": [2100, 763],
    "Q": [450, 875],
    "W": [725, 875],
    "E": [1000, 875],
    "R": [1275, 875],
    "T": [1550, 875],
    "Y": [1825, 875],
    "U": [2100, 875],
    "A": [450, 990],
    "S": [725, 990],
    "D": [1000, 990],
    "F": [1275, 990],
    "G": [1550, 990],
    "H": [1825, 990],
    "J": [2100, 990]
}

let wuXia = {
    bpm: 80,
    beat_n: 4,
    beat_m: 4,
    music: []
}

// 自定义琴谱
let musicDataInfo = [
    null,
    '{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["E"]},{"note": 4,"chord": ["T"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["Q"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 16,"chord": ["H"]},{"note": 4,"chord": ["G"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["H"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["E"]},{"note": 4,"chord": ["W"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["E"]},{"note": 4,"chord": ["T"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 4,"chord": ["H"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["Y"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["H"]},{"note": 4,"chord": ["Q"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 4,"chord": ["Y"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["E"]},{"note": 4,"chord": ["T"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["G"]},{"note": 4,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 4,"chord": ["E"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 4,"chord": ["Y"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["E"]},{"note": 4,"chord": ["T"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["G"]},{"note": 4,"chord": ["Q"]},{"note": 4,"chord": ["_"]},{"note": 16,"chord": ["Q"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["G"]},{"note": 16,"chord": ["G"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["G"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["E"]},{"note": 4,"chord": ["T"]},{"note": 8,"chord": ["G"]},{"note": 16,"chord": ["G"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["G"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["Q"]},{"note": 4,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["1"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["H"]},{"note": 4,"chord": ["Q"]},{"note": 8,"chord": ["G"]},{"note": 16,"chord": ["G"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["G"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["E"]},{"note": 4,"chord": ["T"]},{"note": 8,"chord": ["G"]},{"note": 16,"chord": ["G"]},{"note": 16,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["Q"]},{"note": 4,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["1"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["G"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 4,"chord": ["Q"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["2"]},{"note": 8,"chord": ["1"]},{"note": 8,"chord": ["T"]},{"note": 4,"chord": ["1"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 16,"chord": ["Q"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 4,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["T"]},{"note": 4,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["1"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["G"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 4,"chord": ["Q"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["1"]},{"note": 16,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["G"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 4,"chord": ["Q"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["1"]},{"note": 8,"chord": ["Y"]},{"note": 4,"chord": ["1"]},{"note": 8,"chord": ["H"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["W"]},{"note": 4,"chord": ["E"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["H"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 16,"chord": ["W"]},{"note": 16,"chord": ["E"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Q"]},{"note": 4,"chord": ["W"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["H"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["Q"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 8,"chord": ["W"]},{"note": 8,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 16,"chord": ["T"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["W"]},{"note": 4,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["T"]},{"note": 4,"chord": ["Y"]},{"note": 8,"chord": ["Y"]},{"note": 4,"chord": ["T"]},{"note": 4,"chord": ["E"]},{"note": 4,"chord": ["Y"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["H"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["Y"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["Y"]},{"note": 8,"chord": ["Y"]},{"note": 4,"chord": ["T"]},{"note": 4,"chord": ["W"]},{"note": 4,"chord": ["E"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["H"]},{"note": 16,"chord": ["H"]},{"note": 16,"chord": ["G"]},{"note": 8,"chord": ["H"]},{"note": 8,"chord": ["Q"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["Y"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["Y"]},{"note": 16,"chord": ["Y"]},{"note": 8,"chord": ["Y"]},{"note": 8,"chord": ["Y"]},{"note": 4,"chord": ["T"]},{"note": 4,"chord": ["E"]},{"note": 4,"chord": ["Y"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 8,"chord": ["E"]},{"note": 16,"chord": ["W"]},{"note": 8,"chord": ["E"]},{"note": 8,"chord": ["T"]},{"note": 8,"chord": ["1"]},{"note": 4,"chord": ["U"]},{"note": 8,"chord": ["T"]},{"note": 4,"chord": ["Y"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},{"note": 4,"chord": ["_"]},'
]

// 初始化悬浮窗
let start = () => {
    return new Promise((resolve, reject) => {
        try {
            var window = floaty.rawWindow(
                <vertical>
                    <button id="wStart" text="开始" w="auto" style="Widget.AppCompat.Button.Colored" />
                    <button id="wStop" text="结束" w="auto" style="Widget.AppCompat.Button.Colored" />
                </vertical>
            );
            window.exitOnClose();
            window.wStart.on('click', () => {
                resolve({ status: 'start' })
            })
            window.wStart.on('click', () => {
                resolve({ status: 'stop' })
            })
        } catch (error) {
            reject(error)
        }
    })
}

let ArrayJson = arr => {
    arr = '[' + arr.substring(0, arr.length - 1) + ']';
    return JSON.parse(arr)
}

let ToArray = str => {
    str = str.split(',')
    return str
}


function init(array, config) {
    let configs = config;
    let keyMap = array;
    keyMap.music.forEach((x, k) => {
        if (x["chord"].length > 1) {
            x['chord'].forEach(y => {
                press(configs[y][0], configs[y][1], 1);
            })
        } else {
            press(configs[x['chord'][0]][0], configs[x['chord'][0]][1], 1);
        }
        let stopTime = 60 / keyMap["bpm"] * (keyMap["beat_n"] / keyMap["beat_m"]) / (x['note'] / keyMap["beat_m"]) * 1000
        sleep(stopTime)
    })
}

// 初始化按键
let btnArr = [1, 2, 3, 4, 5, 6, 7, "Q", "W", "E", "R", "T", "Y", "U", "A", "S", "D", "F", "G", "H", "J", "_"];

// 初始化x分音符
let noteArr = [2, 4, 6, 8, 10, 12, 14, 16]

btnArr.forEach(x => {
    let btnName = "x_" + x;
    ui[btnName].click(() => {
        let music = ui.musicWuXia.text();
        let note = ui.sp2.getSelectedItemPosition();
        let musicJsonInfo = {
            note: noteArr[note],
            chord: [String(x)]
        }
        musicJsonInfo = JSON.stringify(musicJsonInfo)
        music = music + musicJsonInfo + ","
        ui.musicWuXia.text(music)
    })
})

// 初始化按键输入
ui.x_b.click(() => {
    let point1 = ToArray(ui.x_b1.text());
    let point2 = ToArray(ui.x_b2.text());
    let point3 = ToArray(ui.x_b3.text());
    let vW = point2[0] - point1[0]
    let vH = point3[1] - point1[1]
    let emptyKey = Object.keys(keyCode)
    emptyKey.forEach((x,k)=>{
        if(x == "_"){
            keyCode[x] = [0,0]
        }else
        if(k > 0 && k <= 7){
            keyCode[x] = [Number(point1[0]) + k * vW, Number(point1[1])]
        }
        else if(k > 7 && k <= 14){
            keyCode[x] = [Number(point1[0]) + (k - 8) * vW, Number(point1[1]) + vH]
        }else if(k > 14 && k <= 21){
            keyCode[x] = [Number(point1[0]) + (k - 15) * vW, Number(point1[1]) + vH * 2]
        }
    })
})

ui.ok.click(() => {
    let bpm = ui.bpm.text();
    let beat_n = ui.beat_n.text();
    let beat_m = ui.beat_m.text();
    let musicData;
    let musicK = ui.sp1.getSelectedItemPosition(); //选择曲谱暂未开放
    if(musicK == 1){
        ui.musicWuXia.text(musicDataInfo[1])
    }
    musicData = ui.musicWuXia.text()
    wuXia = {
        bpm: Number(bpm | 80),
        beat_n: Number(beat_n | 4),
        beat_m: Number(beat_m | 4),
        music: []
    }
    if (bpm.length == 0) {
        ui.bpm.setError("输入不能为空");
        return;
    }
    if (beat_n.length == 0) {
        ui.beat_n.setError("输入不能为空");
        return;
    }
    if (beat_m.length == 0) {
        ui.beat_m.setError("输入不能为空");
        return;
    }
    ui.bpm.setError(null);
    ui.beat_n.setError(null);
    ui.beat_m.setError(null);

    wuXia.music = ArrayJson(musicData);
    start().then(res => {
        if(res.status == "start"){
            // 开启子进程执行操作
            threads.start(function () {
                toast('3s 后开始演奏！')
                setTimeout(()=>{
                    init(wuXia, keyCode)
                },3000)
            })
        }
        if(res.status == "stop"){
            toast('已结束！')
            exit()
            engines.stopAllAndToast()
        }
    }).catch(err => {
        console.log('error ', err)
    })
});
```