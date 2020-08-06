
var str1 = null;
var str2 = null;
var gene = [];
var prints = [];
var footPrint = [];
var myChart1=echarts.init(document.getElementById("rpChart"));

var pos = [],pos1=[],time = [];
var bubbles = [],rare_codons2= [];
var interval2=null;
var length = 0,wtd = 0,sum=0,allSum=0,value = 1;
var mean=0,std=0,high=0,low=0;
var speed =30,num = 100;
var spdText=3,timeText=3;
var y=0,x=0,w=0,m=0,p=0,c=0,a=0;
var cvs = document.getElementById('myCanvas');
var ctx = cvs.getContext('2d');
var myChart = echarts.init(document.getElementById('chartMain'));
var charArea = document.getElementById("chartMain");

var interval = null,interval1=null;
var rare_codons1 = [],mean1=0,std1=0,high2=0;
var dwidth = 0,startValue =0,endValue=0;
var j=0,n = 0,k= 0,q = 0;
var s =0,e=0,rFootPrint,xData;
var ribo1 =null;
var ribo2 =null;
var cvs1=document.getElementById('myCanvas1');
var ctx1 = cvs1.getContext('2d');

ctx1.scale(2,2);
ctx.scale(2,2);
window.onload = function(){
    str1="ATGTCGAACAAAGTTAAAACCAAGGCCATGGTGCCATGGTGCCACCAATAAATTGCATATTTAACTTCTTACACAGCAAACACCAGTAACGATATGGTTATTCGAGCAAATCGGCATAAGAATCAAGGGTAAAATAGTTGGATTTGATGAGTTCATGAATGTTGTCATCGATGAGCCGTGGAAATTCCTGTGAATAGTGCCGATGGTAAAGAAGATTGGAGAAGGGACGCCTTGGGGAAGATCCTGTTGAAAGGCGAAATATCACATTGATAACATCAG";
    str2="16;0;1;6;0;2;102;1;1;20;1;5;73;1;2;21;0;15;65;1;1;12;0;0;14;0;1;25;1;0;55;4;0;12;1;0;9;8;1;2;0;1;38;5;3;85;11;1;6;0;1;26;0;7;104;1;10;29;0;1;9;1;2;71;4;2;77;0;1;48;0;2;34;24;7;155;11;1;12;3;0;25;0;4;31;2;4;33;0;3;46;2;1;80;1;0;19;9;10;12;1;3;22;0;1;47;12;0;11;0;1;16;1;5;5;0;0;18;0;2;19;20;1;18;0;0;16;0;1;15;8;1;1;0;5;10;0;0;67;2;2;36;1;0;10;0;0;1;0;1;68;0;1;6;0;0;10;1;0;3;1;7;86;2;1;27;1;0;4;2;0;10;0;0;63;1;0;19;0;1;27;0;1;34;0;0;25;0;1;11;0;2;14;0;2;71;2;1;58;1;3;110;2;0;15;0;1;17;0;0;4;0;0;6;1;1;20;16;0;9;0;0;11;0;0;5;0;0;0;1;0;11;0;2;10;0;1;8;0;0;6;0;0;10;0;0;10;0;0;4;1;1;13;0;11;12;0;0;2;1;0;8;1;0;22;4;1;0;0;1;8;1;0;5;0;0;4;0;0";

    gene = str1.split("");
    prints = str2.split(";" || ",");
    footPrint = turnNum(prints);

    myChart1.showLoading();
    myChart1.setOption({
        title: {
            text: "Ribosomal footprint statistics",
            textStyle: {
                fontSize: 14,
                fontStyle: "normal",
                fontWeight: "bold"
            },
            x: "center"
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["rp-footprint"],
            x: "right"
        },
        toolbox: {
            feature: {
                mark: {
                    show: false
                },
                dataView: {
                    show: true,
                    readOnly: true
                },
                magicType: {
                    show: false,
                    type: ["line", "bar"]
                },
                saveAsImage: {
                    show: true
                },
                restore: {
                    show: true
                },
                dataZoom: {
                    show: true
                }
            },
            show: true,
            y: "center",
            orient: "vertical"
        },
        dataZoom: {
            show: true,
            realtime: true
        },
        calculable: true,
        xAxis: [
            {
                type: "category",
                data: gene,
                scale: true,
                splitNumber: 0,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    inside: false,
                    interval: 0,
                    lineStyle: {
                        color: "rgb(102, 102, 102)"
                    }
                },
                splitArea: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                type: "value",
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: "rp-footprint",
                type: "bar",
                data: footPrint,
                markPoint: {
                    data: [
                        {
                            type: "max",
                            name: "最大值"
                        },
                        {
                            type: "min",
                            name: "最小值"
                        }
                    ]
                },
                barGap: "0%",
                itemStyle: {
                    normal: {
                        label: {
                            show: false
                        },
                        borderWidth: 1
                    }
                }
            }
        ],
        grid: {
            x: 80
        }
    });
    myChart1.hideLoading();

    rFootPrint = createFootPrint(0,footPrint.length-1,value*3);
    xData = createXdata(rFootPrint.length);
    myChart.showLoading();
    if(rFootPrint.length<=120){
        myChart.setOption({
            title: {
                text: "Ribosomal footprint statistics",
                textStyle: {
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: "bold"
                },
                x: "center"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["rp-footprint"],
                x: "right"
            },
            toolbox: {
                feature: {
                    mark: {
                        show: false
                    },
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    magicType: {
                        show: false,
                        type: ["line", "bar"]
                    },
                    saveAsImage: {
                        show: true
                    },
                    restore: {
                        show: true
                    },
                    dataZoom: {
                        show: true
                    }
                },
                show: true,
                y: "center",
                orient: "vertical"
            },
            dataZoom: {
                show: true,
                realtime: true
            },
            calculable: true,
            xAxis: [
                {
                    type: "category",
                    data: xData,
                    scale: true,
                    splitNumber: 0,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: true,
                        inside: false,
                        interval: 0,
                        lineStyle: {
                            color: "rgb(102, 102, 102)"
                        }
                    },
                    splitArea: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: "rp-footprint",
                    type: "bar",
                    data: rFootPrint,
                    markPoint: {
                        data: [
                            {
                                type: "max",
                                name: "最大值"
                            },
                            {
                                type: "min",
                                name: "最小值"
                            }
                        ]
                    },
                    barGap: "0%",
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 1
                        }
                    }
                }
            ],
            grid: {
                x: 80
            }
        });
    }else{
        myChart.setOption({
            title: {
                text: "Ribosomal footprint statistics",
                textStyle: {
                    fontSize: 14,
                    fontStyle: "normal",
                    fontWeight: "bold"
                },
                x: "center"
            },
            tooltip: {
                trigger: "axis"
            },
            legend: {
                data: ["rp-footprint"],
                x: "right"
            },
            toolbox: {
                feature: {
                    mark: {
                        show: false
                    },
                    dataView: {
                        show: true,
                        readOnly: true
                    },
                    magicType: {
                        show: false,
                        type: ["line", "bar"]
                    },
                    saveAsImage: {
                        show: true
                    },
                    restore: {
                        show: true
                    },
                    dataZoom: {
                        show: true
                    }
                },
                show: true,
                y: "center",
                orient: "vertical"
            },
            dataZoom: {
                show: true,
                realtime: true,
                start:0,
                end: 9000/rFootPrint.length,
                zoomLock:true
            },
            calculable: true,
            xAxis: [
                {
                    type: "category",
                    data: xData,
                    scale: true,
                    splitNumber: 0,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: true,
                        inside: false,
                        interval: 0,
                        lineStyle: {
                            color: "rgb(102, 102, 102)"
                        }
                    },
                    splitArea: {
                        show: false
                    }
                }
            ],
            yAxis: [
                {
                    type: "value",
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: "rp-footprint",
                    type: "bar",
                    data: rFootPrint,
                    markPoint: {
                        data: [
                            {
                                type: "max",
                                name: "最大值"
                            },
                            {
                                type: "min",
                                name: "最小值"
                            }
                        ]
                    },
                    barGap: "0%",
                    itemStyle: {
                        normal: {
                            label: {
                                show: false
                            },
                            borderWidth: 1
                        }
                    }
                }
            ],
            grid: {
                x: 80
            }
        });
    }
    myChart.hideLoading();

    $("#geneSequence").text("ATGTCGAACAAAGTTAAAACCAAGGCCATGGTGCCATGGTGCCACCAATAAATTGCATATTTAACTTCTTACACAGCAAACACCAGTAACGATATGGTTATTCGAGCAAATCGGCATAAGAATCAAGGGTAAAATAGTTGGATTTGATGAGTTCATGAATGTTGTCATCGATGAGCCGTGGAAATTCCTGTGAATAGTGCCGATGGTAAAGAAGATTGGAGAAGGGACGCCTTGGGGAAGATCCTGTTGAAAGGCGAAATATCACATTGATAACATCAGC");
    $("#footPrint").text("16;0;1;6;0;2;102;1;1;20;1;5;73;1;2;21;0;15;65;1;1;12;0;0;14;0;1;25;1;0;55;4;0;12;1;0;9;8;1;2;0;1;38;5;3;85;11;1;6;0;1;26;0;7;104;1;10;29;0;1;9;1;2;71;4;2;77;0;1;48;0;2;34;24;7;155;11;1;12;3;0;25;0;4;31;2;4;33;0;3;46;2;1;80;1;0;19;9;10;12;1;3;22;0;1;47;12;0;11;0;1;16;1;5;5;0;0;18;0;2;19;20;1;18;0;0;16;0;1;15;8;1;1;0;5;10;0;0;67;2;2;36;1;0;10;0;0;1;0;1;68;0;1;6;0;0;10;1;0;3;1;7;86;2;1;27;1;0;4;2;0;10;0;0;63;1;0;19;0;1;27;0;1;34;0;0;25;0;1;11;0;2;14;0;2;71;2;1;58;1;3;110;2;0;15;0;1;17;0;0;4;0;0;6;1;1;20;16;0;9;0;0;11;0;0;5;0;0;0;1;0;11;0;2;10;0;1;8;0;0;6;0;0;10;0;0;10;0;0;4;1;1;13;0;11;12;0;0;2;1;0;8;1;0;22;4;1;0;0;1;8;1;0;5;0;0;4;0;0;1");
    Get();
};
function Get() {
    str1 = $("#geneSequence").val();
    str2 = $("#footPrint").val();
    gene = str1.split("");
    prints = str2.split(";" || ",");
    footPrint = turnNum(prints);

    myChart1.showLoading();
    myChart1.setOption({
        xAxis:{
            data: gene
        },
        series:{
            data:footPrint
        }
    });
    myChart1.hideLoading();

    mean = avg(footPrint);
    std = stdDev(footPrint);
    length = footPrint.length;
    wtd = 750/length;
    k=0;allSum=0;
    while (k < 7) {
        for (j = k * parseInt(length/7); j < (k + 1) * parseInt(length/7); j++) {
            sum += footPrint[j];
        }
        time[k] = sum;
        sum = 0;
        k++;
    }
    console.log(time);
    for(var i=0;i<7;i++){
        allSum += time[i];
    }
    speed =30;num = 100;
    $("#high").val("4");
    $("#low").val("0");
    generate1();

    $("#Codons1").selectpicker('refresh');
    value = $("#Codons1 option:selected").val();
    $("#high2").val("2");
    rFootPrint = createFootPrint(0,footPrint.length-1,value*3);
    xData = createXdata(rFootPrint.length);
    myChart.showLoading();
    if(rFootPrint.length<=120){
        myChart.setOption({
            xAxis:{
                data: xData
            },
            series:{
                data:rFootPrint
            },
            dataZoom: {
                show: true,
                realtime: true,
                start:0,
                end:100,
                zoomLock:false
            }
        });
        $("#cdsLength").text(rFootPrint.length);
        $("#selected").text(rFootPrint.length);
        $("#region").text("0" + "-" + (rFootPrint.length-1));
        $(function () {
            document.getElementById("sequence").innerText ="";
            for(q=0;q<footPrint.length;q++){
                document.getElementById("sequence").innerText += gene[q] ;
            }
        });
        startValue = 0;
        endValue = rFootPrint.length-1;
    } else{
        myChart.setOption({
            xAxis:{
                data: xData
            },
            series:{
                data:rFootPrint
            },
            dataZoom: {
                show: true,
                realtime: true,
                start:0,
                end:9000/rFootPrint.length,
                zoomLock:true
            }
        });
        $("#cdsLength").text(rFootPrint.length);
        $("#selected").text("91");
        $("#region").text("0" + "-" + "90");
        $(function () {
            document.getElementById("sequence").innerText ="";
            for(q=0;q<91*3*value;q++){
                document.getElementById("sequence").innerText += gene[q] ;
            }
        });
        startValue = 0;
        endValue = 90;
    }
    myChart.hideLoading();
    myChart.on('dataZoom', function (params) {
        startValue = myChart.getOption().dataZoom[0].startValue;
        endValue = myChart.getOption().dataZoom[0].endValue;
        $("#selected").text(endValue-startValue+1);
        $("#region").text(startValue + "-" + endValue);
        $(function () {
            document.getElementById("sequence").innerText ="";
            for(q=startValue*value*3;q<(endValue+1)*value*3;q++){
                document.getElementById("sequence").innerText += gene[q] ;
            }
        });
    });
    mean1=avg(rFootPrint);
    std1=stdDev(rFootPrint);
    clearInterval(interval);
    ctx.clearRect(0,0,750,300);
}

function generate1() {
    ctx1.clearRect(0,0,750,900);
    high = $("#high").val();
    low = $("#low").val();
    rare();
    pos.length = 0;pos1.length = 0;
    y=0;w=0;m=0;p=0;c=0;a=0;
    ctx1.beginPath();
    ctx1.rect(0, 100, 750, 2);
    ctx1.fillStyle = "#2319ff";
    ctx1.fill();
    ctx1.beginPath();
    ctx1.rect(0, 200, 750, 1);
    ctx1.fillStyle = "#cccccc";
    ctx1.fill();
    ctx1.beginPath();
    ctx1.rect(0, 550, 750, 1);
    ctx1.fillStyle = "#cccccc";
    ctx1.fill();
    ctx1.beginPath();
    ctx1.fillStyle = "#293241";
    ctx1.font = "17px auto";
    ctx1.fillText("Codon bias",330,230);
    ctx1.beginPath();
    ctx1.fillStyle = "#293241";
    ctx1.font = "17px auto";
    ctx1.fillText("Ribosome density",305,580);
    while (y < 8) {
        ctx1.beginPath();
        ctx1.font = "11px auto";
        ctx1.fillStyle = "#ff430d";
        if(y===0){
            ctx1.fillText("0",w,130);
        }else if(y===7){
            if(length-1< 100){
                ctx1.fillText(length-1,750-13,130);
            }else if(length*y/7 < 1000){
                ctx1.fillText(length-1,750-20,130);
            }else {
                ctx1.fillText(length-1,750-27,130);
            }
        }else{
            if(length*y/7 < 100){
                ctx1.fillText(Math.floor(length*y/7)+'',w-6.5,130);
            }else if(length*y/7 < 1000){
                ctx1.fillText(Math.floor(length*y/7)+'',w-9.75,130);
            }else {
                ctx1.fillText(Math.floor(length*y/7)+'',w-13,130);
            }
            ctx1.beginPath();
            ctx1.fillStyle = "#ff430d";
            ctx1.fillRect(w,102,1,6)
        }
        w += 750/7;
        y++;
    }
    for (m; m < length; m++) {
        if (footPrint[m] > mean+high*std ) {
            ctx1.beginPath();
            ctx1.rect(m * wtd, 100, 3, 4);
            ctx1.fillStyle = "red";
            ctx1.fill();
            pos1[a]=m;
            a++;
        }
        if (footPrint[m] < mean-low*std ) {
            ctx1.beginPath();
            ctx1.rect(m * wtd, 100, wtd, 2);
            ctx1.fillStyle = "#2bd64d";
            ctx1.fill();
            pos1[a]=m;
            a++;
        }
    }
    if(length<=1300){
        while (p < length) {
            var arr = [gene[p], gene[p + 1], gene[p + 2]];
            for (var i = 0; i < rare_codons1.length; i++) {
                if (textCompare(arr, rare_codons1[i])) {
                    ctx1.beginPath();
                    ctx1.rect(p * wtd, 100, 3 * wtd, 2);
                    ctx1.fillStyle = "yellow";
                    ctx1.fill();
                    pos[c] = p;
                    c++;
                }
            }
            p += 3;
        }
    }else {
        while (p < length) {
            var arr = [gene[p], gene[p + 1], gene[p + 2]];
            for (var i = 0; i < rare_codons1.length; i++) {
                if (textCompare(arr, rare_codons1[i])) {
                    ctx1.beginPath();
                    ctx1.rect(p * wtd, 100, 2, 2);
                    ctx1.fillStyle = "yellow";
                    ctx1.fill();
                    pos[c] = p;
                    c++;
                }
            }
            p += 3;
        }
    }

    bubbles.length = 0;
    clearInterval(interval2);

    $("#spdText").val(3);
    $("#spdText").text(3);
    speed = 30;
    $("#timeText").val(3);
    $("#timeText").text(3);
    num=100;
}
function start() {
    clearInterval(interval2);
    interval2 = setInterval(function () {
        x++;
        ctx1.clearRect(0,0,750,199);
        ctx1.beginPath();
        ctx1.rect(0,100,750,2);
        ctx1.fillStyle = "#2319ff";
        ctx1.fill();
        ctx1.beginPath();
        ctx1.rect(0, 200, 750, 1);
        ctx1.fillStyle = "#cccccc";
        ctx1.fill();
        ctx1.beginPath();
        ctx1.rect(0, 550, 750, 1);
        ctx1.fillStyle = "#cccccc";
        ctx1.fill();
        y=0;w=0;m=0;p=0;c=0;a=0;pos.length=0;pos1.length=0;
        high = $("#high").val();
        low = $("#low").val();
        rare();
        while (y < 8) {
            ctx1.beginPath();
            ctx1.font = "11px auto";
            ctx1.fillStyle = "#ff430d";
            if(y===0){
                ctx1.fillText("0",w,130);
            }else if(y===7){
                if(length-1< 100){
                    ctx1.fillText(length-1,750-13,130);
                }else if(length*y/7 < 1000){
                    ctx1.fillText(length-1,750-20,130);
                }else {
                    ctx1.fillText(length-1,750-27,130);
                }
            }else{
                if(length*y/7 < 100){
                    ctx1.fillText(Math.floor(length*y/7)+'',w-6.5,130);
                }else if(length*y/7 < 1000){
                    ctx1.fillText(Math.floor(length*y/7)+'',w-9.75,130);
                }else {
                    ctx1.fillText(Math.floor(length*y/7)+'',w-13,130);
                }
                ctx1.beginPath();
                ctx1.fillStyle = "#ff430d";
                ctx1.fillRect(w,102,1,6)
            }
            w += 750/7;
            y++;
        }
        for (m; m < length; m++) {
            if (footPrint[m] > mean+high*std ) {
                ctx1.beginPath();
                ctx1.rect(m * wtd, 100, 3, 4);
                ctx1.fillStyle = "red";
                ctx1.fill();
                pos1[a]=m;
                a++;
            }
            if (footPrint[m] < mean-low*std ) {
                ctx1.beginPath();
                ctx1.rect(m * wtd, 100, wtd, 2);
                ctx1.fillStyle = "#2bd64d";
                ctx1.fill();
                pos1[a]=m;
                a++;
            }
        }
        if(length<=1300){
            while (p < length) {
                var arr = [gene[p], gene[p + 1], gene[p + 2]];
                for (var i = 0; i < rare_codons1.length; i++) {
                    if (textCompare(arr, rare_codons1[i])) {
                        ctx1.beginPath();
                        ctx1.rect(p * wtd, 100, 3 * wtd, 2);
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                        pos[c] = p;
                        c++;
                    }
                }
                p += 3;
            }
        }else {
            while (p < length) {
                var arr = [gene[p], gene[p + 1], gene[p + 2]];
                for (var i = 0; i < rare_codons1.length; i++) {
                    if (textCompare(arr, rare_codons1[i])) {
                        ctx1.beginPath();
                        ctx1.rect(p * wtd, 100, 2, 2);
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                        pos[c] = p;
                        c++;
                    }
                }
                p += 3;
            }
        }
        if(x%num===0){
            bubbles.push(new Bubble(ctx1,6,101));
        }
        for(let bubble of bubbles){
            bubble.update();
        }
        if(bubbles.length>35){
            bubbles.shift();
        }
    },speed)
}
function stop(){
    clearInterval(interval2);
    interval2 = setInterval(function () {
        x++;
        ctx1.clearRect(0,0,750,199);
        ctx1.beginPath();
        ctx1.rect(0,100,750,2);
        ctx1.fillStyle = "#2319ff";
        ctx1.fill();
        ctx1.beginPath();
        ctx1.rect(0, 200, 750, 1);
        ctx1.fillStyle = "#cccccc";
        ctx1.fill();
        ctx1.beginPath();
        ctx1.rect(0, 550, 750, 1);
        ctx1.fillStyle = "#cccccc";
        ctx1.fill();
        y=0;w=0;m=0;p=0;c=0;a=0;pos.length=0;pos1.length=0;
        high = $("#high").val();
        low = $("#low").val();
        rare();
        while (y < 8) {
            ctx1.beginPath();
            ctx1.font = "11px auto";
            ctx1.fillStyle = "#ff430d";
            if(y===0){
                ctx1.fillText("0",w,130);
            }else if(y===7){
                if(length-1< 100){
                    ctx1.fillText(length-1,750-13,130);
                }else if(length*y/7 < 1000){
                    ctx1.fillText(length-1,750-20,130);
                }else {
                    ctx1.fillText(length-1,750-27,130);
                }
            }else{
                if(length*y/7 < 100){
                    ctx1.fillText(Math.floor(length*y/7)+'',w-6.5,130);
                }else if(length*y/7 < 1000){
                    ctx1.fillText(Math.floor(length*y/7)+'',w-9.75,130);
                }else {
                    ctx1.fillText(Math.floor(length*y/7)+'',w-13,130);
                }
                ctx1.beginPath();
                ctx1.fillStyle = "#ff430d";
                ctx1.fillRect(w,102,1,6)
            }
            w += 750/7;
            y++;
        }
        for (m; m < length; m++) {
            if (footPrint[m] > mean+high*std ) {
                ctx1.beginPath();
                ctx1.rect(m * wtd, 100, 3, 4);
                ctx1.fillStyle = "red";
                ctx1.fill();
                pos1[a]=m;
                a++;
            }
            if (footPrint[m] < mean-low*std ) {
                ctx1.beginPath();
                ctx1.rect(m * wtd, 100, wtd, 2);
                ctx1.fillStyle = "#2bd64d";
                ctx1.fill();
                pos1[a]=m;
                a++;
            }
        }
        if(length<=1300){
            while (p < length) {
                var arr = [gene[p], gene[p + 1], gene[p + 2]];
                for (var i = 0; i < rare_codons1.length; i++) {
                    if (textCompare(arr, rare_codons1[i])) {
                        ctx1.beginPath();
                        ctx1.rect(p * wtd, 100, 3 * wtd, 2);
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                        pos[c] = p;
                        c++;
                    }
                }
                p += 3;
            }
        }else {
            while (p < length) {
                var arr = [gene[p], gene[p + 1], gene[p + 2]];
                for (var i = 0; i < rare_codons1.length; i++) {
                    if (textCompare(arr, rare_codons1[i])) {
                        ctx1.beginPath();
                        ctx1.rect(p * wtd, 100, 2, 2);
                        ctx1.fillStyle = "yellow";
                        ctx1.fill();
                        pos[c] = p;
                        c++;
                    }
                }
                p += 3;
            }
        }
        for(let bubble of bubbles){
            bubble.stop();
        }
        if(bubbles.length>30){
            bubbles.shift();
        }
    },speed)
}
function spdUp() {
    spdText=$("#spdText").val();
    if(spdText<5.5){
        spdText = spdText-0 + 0.5;
        $("#spdText").val(spdText);
        $("#spdText").text(spdText);
        speed = speed-5;
    }
    console.log(speed);
    $("#timeText").val(3);
    $("#timeText").text(3);
    num=100;
    start();
}
function spdDown() {
    spdText=$("#spdText").val();
    if(spdText>0.5){
        spdText = spdText - 0.5;
        $("#spdText").val(spdText);
        $("#spdText").text(spdText);
        speed = speed + 5;
    }
    console.log(speed);
    $("#timeText").val(3);
    $("#timeText").text(3);
    num=100;
    start();
}
function timeUp() {
    timeText = $("#timeText").val();
    if(timeText<5.5){
        timeText = timeText-0 + 0.5;
        $("#timeText").val(timeText);
        $("#timeText").text(timeText);
        if(timeText<=3){
            num = num + 12;
        }else {
            num = num + 50;
        }
    }
    console.log(num);
    start();
}
function timeDown() {
    timeText = $("#timeText").val();
    if(timeText>0.5){
        timeText = timeText - 0.5;
        $("#timeText").val(timeText);
        $("#timeText").text(timeText);
        if(timeText<3){
            num = num - 12;
        }else {
            num = num - 50;
        }
    }
    console.log(num);
    start();
}
function cvsClick(e) {
    var x = e.clientX - cvs1.getBoundingClientRect().left;
    var y = e.clientY- cvs1.getBoundingClientRect().top;
    console.log(x);
    console.log(y);

    for (var j=0; j < pos.length; j++) {
        if(length<1300){
            if (x >= pos[j] * wtd && x <= (pos[j]+3)*wtd && y >= 98 && y <= 103) {
                ctx1.clearRect(0,201,750,348);
                var i=0,w=0;
                ctx1.beginPath();
                ctx1.font = "17px auto";
                ctx1.fillStyle = "#293241";
                ctx1.fillText("Codon bias",330,230);
                ctx1.beginPath();
                ctx1.fillStyle = "#1144ff";
                ctx1.fillRect(25, 470, 700, 1);
                if(pos[j]>=length-15){
                    i=length-30;
                    while (i<length){
                        var Arr1 = numChTextArr(i);
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#1989ff";
                        ctx1.fill();
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#ff4f1b";
                        ctx1.fillText(gene[i],w*23+38,482);
                        for(var m=0;m<Arr1.length;m++){
                            ctx1.beginPath();
                            ctx1.font = "10px auto";
                            ctx1.fillStyle="#293241";
                            ctx1.fillText(Arr1[m],w*23+38,494+m*12);
                        }
                        if (i % 3 === 2 ) {
                            var codon1 = [gene[i - 2], gene[i - 1], gene[i]];
                            for(var q=0;q<rare_codons1.length;q++){
                                if (textCompare(codon1, rare_codons1[q])) {
                                    ctx1.beginPath();
                                    ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                                    ctx1.rect((w-1)*23+35,470-footPrint[i-1],14,footPrint[i-1]);
                                    ctx1.rect((w-2)*23+35,470-footPrint[i-2],14,footPrint[i-2]);
                                    ctx1.fillStyle = "yellow";
                                    ctx1.fill();
                                    ctx1.strokeStyle = 'yellow';
                                    ctx1.stroke();
                                }
                            }
                        }
                        i++;
                        w++;
                    }
                }
                else if(pos[j]<15){
                    i=0;
                    while (i<30){
                        var Arr1 = numChTextArr(i);
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#1989ff";
                        ctx1.fill();
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#ff4f1b";
                        ctx1.fillText(gene[i],w*23+38,482);
                        for(var m=0;m<Arr1.length;m++){
                            ctx1.beginPath();
                            ctx1.font = "10px auto";
                            ctx1.fillStyle="#293241";
                            ctx1.fillText(Arr1[m],w*23+38,494+m*12);
                        }
                        if (i % 3 === 2 ) {
                            var codon1 = [gene[i - 2], gene[i - 1], gene[i]];
                            for(var q=0;q<rare_codons1.length;q++){
                                if (textCompare(codon1, rare_codons1[q])) {
                                    ctx1.beginPath();
                                    ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                                    ctx1.rect((w-1)*23+35,470-footPrint[i-1],14,footPrint[i-1]);
                                    ctx1.rect((w-2)*23+35,470-footPrint[i-2],14,footPrint[i-2]);
                                    ctx1.fillStyle = "yellow";
                                    ctx1.fill();
                                    ctx1.strokeStyle = 'yellow';
                                    ctx1.stroke();
                                }
                            }
                        }
                        i++;
                        w++;
                    }
                }
                else{
                    i=pos[j]-15;
                    while (i<pos[j]+15){
                        var Arr = numChTextArr(i);
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#1989ff";
                        ctx1.fill();
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#ff4f1b";
                        ctx1.fillText(gene[i],w*23+38,482);
                        for(var r=0;r<Arr.length;r++){
                            ctx1.beginPath();
                            ctx1.font = "10px auto";
                            ctx1.fillStyle="#293241";
                            ctx1.fillText(Arr[r],w*23+38,494+r*12);
                        }
                        if (i % 3 === 2 ) {
                            var codon = [gene[i - 2], gene[i - 1], gene[i]];
                            for(var q=0;q<rare_codons1.length;q++){
                                if (textCompare(codon, rare_codons1[q])) {
                                    ctx1.beginPath();
                                    ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                                    ctx1.rect((w-1)*23+35,470-footPrint[i-1],14,footPrint[i-1]);
                                    ctx1.rect((w-2)*23+35,470-footPrint[i-2],14,footPrint[i-2]);
                                    ctx1.fillStyle = "yellow";
                                    ctx1.fill();
                                    ctx1.strokeStyle = 'yellow';
                                    ctx1.stroke();
                                }
                            }
                        }
                        i++;
                        w++;
                    }
                }
            }
        }
        else {
            if (x >= pos[j] * wtd && x <= (pos[j]*wtd+4) && y >= 98 && y <= 103) {
                ctx1.clearRect(0,201,750,348);
                var i=0,w=0;
                ctx1.beginPath();
                ctx1.font = "17px auto";
                ctx1.fillStyle = "#293241";
                ctx1.fillText("Codon bias",330,230);
                ctx1.beginPath();
                ctx1.fillStyle = "#1144ff";
                ctx1.fillRect(25, 470, 700, 1);
                if(pos[j]>=length-15){
                    i=length-30;
                    while (i<length){
                        var Arr1 = numChTextArr(i);
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#1989ff";
                        ctx1.fill();
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#ff4f1b";
                        ctx1.fillText(gene[i],w*23+38,482);
                        for(var m=0;m<Arr1.length;m++){
                            ctx1.beginPath();
                            ctx1.font = "10px auto";
                            ctx1.fillStyle="#293241";
                            ctx1.fillText(Arr1[m],w*23+38,494+m*12);
                        }
                        if (i % 3 === 2 ) {
                            var codon1 = [gene[i - 2], gene[i - 1], gene[i]];
                            for(var q=0;q<rare_codons1.length;q++){
                                if (textCompare(codon1, rare_codons1[q])) {
                                    ctx1.beginPath();
                                    ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                                    ctx1.rect((w-1)*23+35,470-footPrint[i-1],14,footPrint[i-1]);
                                    ctx1.rect((w-2)*23+35,470-footPrint[i-2],14,footPrint[i-2]);
                                    ctx1.fillStyle = "yellow";
                                    ctx1.fill();
                                    ctx1.strokeStyle = 'yellow';
                                    ctx1.stroke();
                                }
                            }
                        }
                        i++;
                        w++;
                    }
                }
                else if(pos[j]<15){
                    i=0;
                    while (i<30){
                        var Arr1 = numChTextArr(i);
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#1989ff";
                        ctx1.fill();
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#ff4f1b";
                        ctx1.fillText(gene[i],w*23+38,482);
                        for(var m=0;m<Arr1.length;m++){
                            ctx1.beginPath();
                            ctx1.font = "10px auto";
                            ctx1.fillStyle="#293241";
                            ctx1.fillText(Arr1[m],w*23+38,494+m*12);
                        }
                        if (i % 3 === 2 ) {
                            var codon1 = [gene[i - 2], gene[i - 1], gene[i]];
                            for(var q=0;q<rare_codons1.length;q++){
                                if (textCompare(codon1, rare_codons1[q])) {
                                    ctx1.beginPath();
                                    ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                                    ctx1.rect((w-1)*23+35,470-footPrint[i-1],14,footPrint[i-1]);
                                    ctx1.rect((w-2)*23+35,470-footPrint[i-2],14,footPrint[i-2]);
                                    ctx1.fillStyle = "yellow";
                                    ctx1.fill();
                                    ctx1.strokeStyle = 'yellow';
                                    ctx1.stroke();
                                }
                            }
                        }
                        i++;
                        w++;
                    }
                }
                else{
                    i=pos[j]-15;
                    while (i<pos[j]+15){
                        var Arr = numChTextArr(i);
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#1989ff";
                        ctx1.fill();
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#ff4f1b";
                        ctx1.fillText(gene[i],w*23+38,482);
                        for(var r=0;r<Arr.length;r++){
                            ctx1.beginPath();
                            ctx1.font = "10px auto";
                            ctx1.fillStyle="#293241";
                            ctx1.fillText(Arr[r],w*23+38,494+r*12);
                        }
                        if (i % 3 === 2 ) {
                            var codon = [gene[i - 2], gene[i - 1], gene[i]];
                            for(var q=0;q<rare_codons1.length;q++){
                                if (textCompare(codon, rare_codons1[q])) {
                                    ctx1.beginPath();
                                    ctx1.rect(w*23+35,470-footPrint[i],14,footPrint[i]);
                                    ctx1.rect((w-1)*23+35,470-footPrint[i-1],14,footPrint[i-1]);
                                    ctx1.rect((w-2)*23+35,470-footPrint[i-2],14,footPrint[i-2]);
                                    ctx1.fillStyle = "yellow";
                                    ctx1.fill();
                                    ctx1.strokeStyle = 'yellow';
                                    ctx1.stroke();
                                }
                            }
                        }
                        i++;
                        w++;
                    }
                }
            }
        }
        // else if (length>3000&&length<=6000){
        //     if (x >= pos[j] * wtd && x <= (pos[j]*wtd+4) && y >= 98 && y <= 103) {
        //         ctx1.clearRect(0,110,750,400);
        //         var i=0,w=0;
        //         ctx1.beginPath();
        //         ctx1.fillStyle = "#1144ff";
        //         ctx1.fillRect(25, 400, 700, 1);
        //         // if(pos[j]/10===(length-1)/10){
        //         //     i=length-30;
        //         //     while (i<length){
        //         //         var Arr1 = numChTextArr(i);
        //         //         ctx1.beginPath();
        //         //         ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //         ctx1.fillStyle = "#1989ff";
        //         //         ctx1.fill();
        //         //         ctx1.beginPath();
        //         //         ctx1.fillStyle="#ff4f1b";
        //         //         ctx1.fillText(gene[i],w*23+38,412);
        //         //         for(var m=0;m<Arr1.length;m++){
        //         //             ctx1.beginPath();
        //         //             ctx1.fillStyle="#293241";
        //         //             ctx1.fillText(Arr1[m],w*23+38,424+m*12);
        //         //         }
        //         //         if (i % 3 === 2 ) {
        //         //             var codon1 = [gene[i - 2], gene[i - 1], gene[i]];
        //         //             for(var q=0;q<rare_codons.length;q++){
        //         //                 if (textCompare(codon1, rare_codons[q])) {
        //         //                     ctx1.beginPath();
        //         //                     ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //                     ctx1.rect((w-1)*23+35,400-footPrint[i-1],14,footPrint[i-1]);
        //         //                     ctx1.rect((w-2)*23+35,400-footPrint[i-2],14,footPrint[i-2]);
        //         //                     ctx1.fillStyle = "yellow";
        //         //                     ctx1.fill();
        //         //                     ctx1.strokeStyle = 'yellow';
        //         //                     ctx1.stroke();
        //         //                 }
        //         //             }
        //         //         }
        //         //         i++;
        //         //         w++;
        //         //     }
        //         // }else if(pos[j]/10===0){
        //         //     i=0;
        //         //     while (i<30){
        //         //         var Arr1 = numChTextArr(i);
        //         //         ctx1.beginPath();
        //         //         ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //         ctx1.fillStyle = "#1989ff";
        //         //         ctx1.fill();
        //         //         ctx1.beginPath();
        //         //         ctx1.fillStyle="#ff4f1b";
        //         //         ctx1.fillText(gene[i],w*23+38,412);
        //         //         for(var m=0;m<Arr1.length;m++){
        //         //             ctx1.beginPath();
        //         //             ctx1.fillStyle="#293241";
        //         //             ctx1.fillText(Arr1[m],w*23+38,424+m*12);
        //         //         }
        //         //         if (i % 3 === 2 ) {
        //         //             var codon1 = [gene[i - 2], gene[i - 1], gene[i]];
        //         //             for(var q=0;q<rare_codons.length;q++){
        //         //                 if (textCompare(codon1, rare_codons[q])) {
        //         //                     ctx1.beginPath();
        //         //                     ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //                     ctx1.rect((w-1)*23+35,400-footPrint[i-1],14,footPrint[i-1]);
        //         //                     ctx1.rect((w-2)*23+35,400-footPrint[i-2],14,footPrint[i-2]);
        //         //                     ctx1.fillStyle = "yellow";
        //         //                     ctx1.fill();
        //         //                     ctx1.strokeStyle = 'yellow';
        //         //                     ctx1.stroke();
        //         //                 }
        //         //             }
        //         //         }
        //         //         i++;
        //         //         w++;
        //         //     }
        //         // }else{
        //         //     i=pos[j]-15;
        //         //     while (i<pos[j]+15){
        //         //         var Arr = numChTextArr(i);
        //         //         ctx1.beginPath();
        //         //         ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //         ctx1.fillStyle = "#1989ff";
        //         //         ctx1.fill();
        //         //         ctx1.beginPath();
        //         //         ctx1.fillStyle="#ff4f1b";
        //         //         ctx1.fillText(gene[i],w*23+38,412);
        //         //         for(var r=0;r<Arr.length;r++){
        //         //             ctx1.beginPath();
        //         //             ctx1.fillStyle="#293241";
        //         //             ctx1.fillText(Arr[r],w*23+38,424+r*12);
        //         //         }
        //         //         if (i % 3 === 2 ) {
        //         //             var codon = [gene[i - 2], gene[i - 1], gene[i]];
        //         //             for(var q=0;q<rare_codons.length;q++){
        //         //                 if (textCompare(codon, rare_codons[q])) {
        //         //                     ctx1.beginPath();
        //         //                     ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //                     ctx1.rect((w-1)*23+35,400-footPrint[i-1],14,footPrint[i-1]);
        //         //                     ctx1.rect((w-2)*23+35,400-footPrint[i-2],14,footPrint[i-2]);
        //         //                     ctx1.fillStyle = "yellow";
        //         //                     ctx1.fill();
        //         //                     ctx1.strokeStyle = 'yellow';
        //         //                     ctx1.stroke();
        //         //                 }
        //         //             }
        //         //         }
        //         //         i++;
        //         //         w++;
        //         //     }
        //         // }
        //     }
        // }else {
        //     if (x >= pos[j] * wtd && x <= (pos[j]*wtd+4) && y >= 98 && y <= 103) {
        //         ctx1.clearRect(0,110,750,400);
        //         var i=0,w=0;
        //         ctx1.beginPath();
        //         ctx1.fillStyle = "#1144ff";
        //         ctx1.fillRect(25, 400, 700, 1);
        //         // if(pos[j]/30===(length-1)/30){
        //         //     i=length-30;
        //         //     while (i<length){
        //         //         var Arr1 = numChTextArr(i);
        //         //         ctx1.beginPath();
        //         //         ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //         ctx1.fillStyle = "#1989ff";
        //         //         ctx1.fill();
        //         //         ctx1.beginPath();
        //         //         ctx1.fillStyle="#ff4f1b";
        //         //         ctx1.fillText(gene[i],w*23+38,412);
        //         //         for(var m=0;m<Arr1.length;m++){
        //         //             ctx1.beginPath();
        //         //             ctx1.fillStyle="#293241";
        //         //             ctx1.fillText(Arr1[m],w*23+38,424+m*12);
        //         //         }
        //         //         if (i % 3 === 2 ) {
        //         //             var codon1 = [gene[i - 2], gene[i - 1], gene[i]];
        //         //             for(var q=0;q<rare_codons.length;q++){
        //         //                 if (textCompare(codon1, rare_codons[q])) {
        //         //                     ctx1.beginPath();
        //         //                     ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //                     ctx1.rect((w-1)*23+35,400-footPrint[i-1],14,footPrint[i-1]);
        //         //                     ctx1.rect((w-2)*23+35,400-footPrint[i-2],14,footPrint[i-2]);
        //         //                     ctx1.fillStyle = "yellow";
        //         //                     ctx1.fill();
        //         //                     ctx1.strokeStyle = 'yellow';
        //         //                     ctx1.stroke();
        //         //                 }
        //         //             }
        //         //         }
        //         //         i++;
        //         //         w++;
        //         //     }
        //         // }else{
        //         //     i=(pos[j]/30)*30;
        //         //     while (((pos[j]/30)+1)*30){
        //         //         var Arr = numChTextArr(i);
        //         //         ctx1.beginPath();
        //         //         ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //         ctx1.fillStyle = "#1989ff";
        //         //         ctx1.fill();
        //         //         ctx1.beginPath();
        //         //         ctx1.fillStyle="#ff4f1b";
        //         //         ctx1.fillText(gene[i],w*23+38,412);
        //         //         for(var r=0;r<Arr.length;r++){
        //         //             ctx1.beginPath();
        //         //             ctx1.fillStyle="#293241";
        //         //             ctx1.fillText(Arr[r],w*23+38,424+r*12);
        //         //         }
        //         //         if (i % 3 === 2 ) {
        //         //             var codon = [gene[i - 2], gene[i - 1], gene[i]];
        //         //             for(var q=0;q<rare_codons.length;q++){
        //         //                 if (textCompare(codon, rare_codons[q])) {
        //         //                     ctx1.beginPath();
        //         //                     ctx1.rect(w*23+35,400-footPrint[i],14,footPrint[i]);
        //         //                     ctx1.rect((w-1)*23+35,400-footPrint[i-1],14,footPrint[i-1]);
        //         //                     ctx1.rect((w-2)*23+35,400-footPrint[i-2],14,footPrint[i-2]);
        //         //                     ctx1.fillStyle = "yellow";
        //         //                     ctx1.fill();
        //         //                     ctx1.strokeStyle = 'yellow';
        //         //                     ctx1.stroke();
        //         //                 }
        //         //             }
        //         //         }
        //         //         i++;
        //         //         w++;
        //         //     }
        //         // }
        //     }
        // }
    }
    for(var j=0; j< pos1.length; j++){
        if (x >= (pos1[j]-1) * wtd && x <= (pos1[j] * wtd+7) && y >= 98 && y <= 104){
            ctx1.clearRect(0,551,750,348);
            var i=0,w=0;
            ctx1.beginPath();
            ctx1.fillStyle = "#293241";
            ctx1.font = "17px auto";
            ctx1.fillText("Ribosome density",305,580);
            ctx1.beginPath();
            ctx1.fillStyle = "#1144ff";
            ctx1.fillRect(25, 820, 700, 1);
            if(pos1[j]>=15 && pos1[j]< length-15){
                i=pos1[j]-15;
                while (i<pos1[j]+15){
                    var Arr = numChTextArr(i);
                    ctx1.beginPath();
                    ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                    ctx1.fillStyle = "#1989ff";
                    ctx1.fill();
                    ctx1.beginPath();
                    ctx1.font = "10px auto";
                    ctx1.fillStyle="#ff4f1b";
                    ctx1.fillText(gene[i],w*23+38,832);
                    for(var r=0;r<Arr.length;r++){
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#293241";
                        ctx1.fillText(Arr[r],w*23+38,844+r*12);
                    }
                    if (footPrint[i]> mean+high*std) {
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "red";
                        ctx1.fill();
                    }
                    if(footPrint[i] < mean-low*std ){
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#2bd64d";
                        ctx1.fill();
                        ctx1.strokeStyle = "#32d353";
                        ctx1.stroke();
                    }
                    i++;
                    w++;
                }
            }
            else if(pos1[j]<15){
                i=0;
                while (i<30){
                    var Arr1 = numChTextArr(i);
                    ctx1.beginPath();
                    ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                    ctx1.fillStyle = "#1989ff";
                    ctx1.fill();
                    ctx1.beginPath();
                    ctx1.font = "10px auto";
                    ctx1.fillStyle="#ff4f1b";
                    ctx1.fillText(gene[i],w*23+38,832);
                    for(var m=0;m<Arr1.length;m++){
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#293241";
                        ctx1.fillText(Arr1[m],w*23+38,844+m*12);
                    }
                    if (footPrint[i]>100) {
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "red";
                        ctx1.fill();
                    }
                    if(footPrint[i] < mean-low*std ){
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#2bd64d";
                        ctx1.fill();
                        ctx1.strokeStyle = "#32d353";
                        ctx1.stroke();
                    }
                    i++;
                    w++;
                }
            }
            else {
                i=length-30;
                while (i<length){
                    var Arr1 = numChTextArr(i);
                    ctx1.beginPath();
                    ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                    ctx1.fillStyle = "#1989ff";
                    ctx1.fill();
                    ctx1.beginPath();
                    ctx1.font = "10px auto";
                    ctx1.fillStyle="#ff4f1b";
                    ctx1.fillText(gene[i],w*23+38,832);
                    for(var m=0;m<Arr1.length;m++){
                        ctx1.beginPath();
                        ctx1.font = "10px auto";
                        ctx1.fillStyle="#293241";
                        ctx1.fillText(Arr1[m],w*23+38,844+m*12);
                    }
                    if (footPrint[i]>100) {
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "red";
                        ctx1.fill();
                    }
                    if(footPrint[i] < mean-low*std ){
                        ctx1.beginPath();
                        ctx1.rect(w*23+35,820-footPrint[i],14,footPrint[i]);
                        ctx1.fillStyle = "#2bd64d";
                        ctx1.fill();
                        ctx1.strokeStyle = "#32d353";
                        ctx1.stroke();
                    }
                    i++;
                    w++;
                }
            }
        }
    }
}

function ready1(){
    value = $("#Codons1 option:selected").val();
    rFootPrint = createFootPrint(0,footPrint.length-1,value*3);
    xData = createXdata(rFootPrint.length);
    if(value==="1"){
        $("#buttons2").css("display","block");
    }else {
        $("#buttons2").css("display","none");
    }
    myChart.showLoading();
    if(rFootPrint.length<=120){
        myChart.setOption({
            xAxis:{
                data: xData
            },
            series:{
                data:rFootPrint
            },
            dataZoom: {
                show: true,
                realtime: true,
                start:0,
                end:100,
                zoomLock:false
            }
        });
        $("#cdsLength").text(rFootPrint.length);
        $("#selected").text(rFootPrint.length);
        $("#region").text("0" + "-" + (rFootPrint.length-1));
        $(function () {
            document.getElementById("sequence").innerText ="";
            for(q=0;q<footPrint.length;q++){
                document.getElementById("sequence").innerText += gene[q] ;
            }
        });
        startValue = 0;
        endValue = rFootPrint.length-1;
    } else{
        myChart.setOption({
            xAxis:{
                data: xData
            },
            series:{
                data:rFootPrint
            },
            dataZoom: {
                show: true,
                realtime: true,
                start:0,
                end:9000/rFootPrint.length,
                zoomLock:true
            }
        });
        $("#cdsLength").text(rFootPrint.length);
        $("#selected").text("91");
        $("#region").text("0" + "-" + "90");
        $(function () {
            document.getElementById("sequence").innerText ="";
            for(q=0;q<91*3*value;q++){
                document.getElementById("sequence").innerText += gene[q] ;
            }
        });
        startValue = 0;
        endValue = 90;
    }
    myChart.hideLoading();
    myChart.on('dataZoom', function (params) {
        startValue = myChart.getOption().dataZoom[0].startValue;
        endValue = myChart.getOption().dataZoom[0].endValue;
        $("#selected").text(endValue-startValue+1);
        $("#region").text(startValue + "-" + endValue);
        $(function () {
            document.getElementById("sequence").innerText ="";
            for(q=startValue*value*3;q<(endValue+1)*value*3;q++){
                document.getElementById("sequence").innerText += gene[q] ;
            }
        });
    });
    mean1=avg(rFootPrint);
    std1=stdDev(rFootPrint);
    generate();
}
function generate(){
    if(value === "1"){
        high2= $("#high2").val();
        rare1();
        j=startValue;
        dwidth = 750 / (endValue - startValue+ 1);
        clearInterval(interval);
        ctx.clearRect(0,0,750,300);

        ribo1 = new Ellipse(ctx,0,220-5.5*dwidth,9*dwidth,6*dwidth,255,67,13);
        ribo2 = new Ellipse(ctx,0,220+dwidth,5*dwidth,3*dwidth,255,255,255);
        interval1 = setInterval(function () {
            for (k = startValue; k <= j; k++) {
                ctx.beginPath();
                ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                ctx.fillStyle = '#5a97d4';
                ctx.fill();
                ctx.strokeStyle = '#143ed6';
                ctx.stroke();
                if ( rFootPrint[k] > mean1+high2*std1) {
                    ctx.beginPath();
                    ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                    ctx.fillStyle = "red";
                    ctx.fill();
                }
                var Arr = [gene[k*3], gene[k*3+1], gene[k*3+2]];
                for(var i=0;i<rare_codons2.length;i++){
                    if (textCompare(Arr, rare_codons2[i])) {
                        if (rFootPrint[k] > mean1+high2*std1){
                            ctx.beginPath();
                            ctx.rect((k-startValue)* dwidth + 1.5, 220 - rFootPrint[k]/2,dwidth - 3, rFootPrint[k]/2);
                            ctx.fillStyle = "yellow";
                            ctx.fill();
                        }else {
                            ctx.beginPath();
                            ctx.rect((k-startValue)* dwidth + 1.5, 220 - rFootPrint[k],dwidth - 3, rFootPrint[k]);
                            ctx.fillStyle = "yellow";
                            ctx.fill();
                            ctx.strokeStyle = '#d67526';
                            ctx.stroke();
                        }
                    }
                }
            }
            for (n = startValue; n <= endValue; n++) {
                var arr = numChTextArr(n*3);
                ctx.beginPath();
                ctx.fillStyle = "#0b4fd6";
                ctx.fillRect(0, 220, 750, 1);
                ctx.beginPath();
                ctx.fillStyle = "#bf1fff";
                ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                if (rFootPrint[n] > mean1+high2*std1) {
                    ctx.beginPath();
                    ctx.fillStyle = "red";
                    ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                }
                var Arr = [gene[n*3], gene[n*3+1], gene[n*3+2]];
                for(var i=0;i<rare_codons2.length;i++){
                    if (textCompare(Arr, rare_codons2[i])) {
                        ctx.beginPath();
                        ctx.fillStyle = "#24d23b";
                        ctx.fillText(gene[n*3], (n - startValue) * dwidth + dwidth / 2 - 3.5, 232);
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = "#293241";
                    ctx.fillText(arr[i], (n-startValue) * dwidth + dwidth / 2 - 3.5, 244 + i * 12);
                }
            }
            j++;
            if(j===(endValue+1)){
                clearInterval(interval1);
            }
        }, 10);
    }
    else if(value==="3"){
        j=startValue;
        dwidth = 750 / (endValue - startValue+ 1);
        clearInterval(interval);
        ctx.clearRect(0,0,750,300);

        ribo1 = new Ellipse(ctx,0,220-1.65*dwidth,2.7*dwidth,1.8*dwidth,255,67,13);
        ribo2 = new Ellipse(ctx,0,220+0.3*dwidth,1.5*dwidth,0.9*dwidth,255,255,255);
        interval1 = setInterval(function () {
            for (k = startValue; k <= j; k++) {
                ctx.beginPath();
                ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                ctx.fillStyle = '#5a97d4';
                ctx.fill();
                ctx.strokeStyle = '#143ed6';
                ctx.stroke();
            }
            for (n = startValue; n <= endValue; n++) {
                var arr = numChTextArr(n*3);
                ctx.beginPath();
                ctx.fillStyle = "#0b4fd6";
                ctx.fillRect(0, 220, 750, 1);
                ctx.beginPath();
                ctx.fillStyle = "#bf1fff";
                ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                for (var i = 0; i < arr.length; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = "#293241";
                    ctx.fillText(arr[i], (n-startValue) * dwidth + (dwidth) / 2 - 3.5, 244 + i * 12);
                }
            }
            j++;
            if(j===(endValue+1)){
                clearInterval(interval1);
            }
        }, 10);
    }
    else{
        j=startValue;
        dwidth = 750 / (endValue - startValue+ 1);
        clearInterval(interval);
        ctx.clearRect(0,0,750,300);

        ribo1 = new Ellipse(ctx,0,220-0.55*dwidth,0.9*dwidth,0.6*dwidth,255,67,13);
        ribo2 = new Ellipse(ctx,0,220+0.1*dwidth,0.5*dwidth,0.3*dwidth,255,255,255);
        interval1 = setInterval(function () {
            for (k = startValue; k <= j; k++) {
                ctx.beginPath();
                ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                ctx.fillStyle = '#5a97d4';
                ctx.fill();
                ctx.strokeStyle = '#143ed6';
                ctx.stroke();
            }
            for (n = startValue; n <= endValue; n++) {
                var arr = numChTextArr(n*3);
                ctx.beginPath();
                ctx.fillStyle = "#0b4fd6";
                ctx.fillRect(0, 220, 750, 1);
                ctx.beginPath();
                ctx.fillStyle = "#bf1fff";
                ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                for (var i = 0; i < arr.length; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = "#293241";
                    ctx.fillText(arr[i], (n-startValue) * dwidth + (dwidth) / 2 - 3.5, 244 + i * 12);
                }
            }
            j++;
            if(j===(endValue+1)){
                clearInterval(interval1);
            }
        }, 10);
    }
}
function Begin() {
    if(value === "1"){
        clearInterval(interval);
        interval = setInterval(function () {
            ctx.clearRect(0,0,750,300);
            dwidth = 750 / (endValue - startValue+ 1);
            high2=$("#high2").val();
            rare1();
            for (k = startValue; k <= endValue; k++) {
                ctx.beginPath();
                ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                ctx.fillStyle = '#5a97d4';
                ctx.fill();
                ctx.strokeStyle = '#143ed6';
                ctx.stroke();
                if (rFootPrint[k] > mean1+high2*std1) {
                    ctx.beginPath();
                    ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                    ctx.fillStyle = "red";
                    ctx.fill();
                }
                var Arr = [gene[k*3], gene[k*3+1], gene[k*3+2]];
                for(var i=0;i<rare_codons2.length;i++){
                    if (textCompare(Arr, rare_codons2[i])) {
                        if (rFootPrint[k] >mean1+high2*std1){
                            ctx.beginPath();
                            ctx.rect((k-startValue)* dwidth + 1.5, 220 - rFootPrint[k]/2,dwidth - 3, rFootPrint[k]/2);
                            ctx.fillStyle = "yellow";
                            ctx.fill();
                        }else {
                            ctx.beginPath();
                            ctx.rect((k-startValue)* dwidth + 1.5, 220 - rFootPrint[k],dwidth - 3, rFootPrint[k]);
                            ctx.fillStyle = "yellow";
                            ctx.fill();
                            ctx.strokeStyle = '#d67526';
                            ctx.stroke();
                        }
                    }
                }
            }
            for (n = startValue; n <= endValue; n++) {
                var arr = numChTextArr(n*3);
                ctx.beginPath();
                ctx.fillStyle = "#0b4fd6";
                ctx.fillRect(0, 220, 750, 1);
                ctx.beginPath();
                ctx.fillStyle = "#bf1fff";
                ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                if (rFootPrint[n] > mean1+high2*std1) {
                    ctx.beginPath();
                    ctx.fillStyle = "red";
                    ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                }
                var Arr = [gene[n*3], gene[n*3+1], gene[n*3+2]];
                for(var i=0;i<rare_codons2.length;i++){
                    if (textCompare(Arr, rare_codons2[i])) {
                        ctx.beginPath();
                        ctx.fillStyle = "#24d23b";
                        ctx.fillText(gene[n*3], (n - startValue) * dwidth + dwidth / 2 - 3.5, 232);
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = "#293241";
                    ctx.fillText(arr[i], (n-startValue) * dwidth + dwidth / 2 - 3.5, 244 + i * 12);
                }
            }
            ribo1.update();
            ribo2.update();
        }, 35);
    }
    else{
        clearInterval(interval);
        interval = setInterval(function () {
            ctx.clearRect(0,0,750,300);
            dwidth = 750 / (endValue - startValue+ 1);
            for (k = startValue; k <= endValue; k++) {
                ctx.beginPath();
                ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                ctx.fillStyle = '#5a97d4';
                ctx.fill();
                ctx.strokeStyle = '#143ed6';
                ctx.stroke();
            }
            for (n = startValue; n <= endValue; n++) {
                var arr = numChTextArr(n*3);
                ctx.beginPath();
                ctx.fillStyle = "#0b4fd6";
                ctx.fillRect(0, 220, 750, 1);
                ctx.beginPath();
                ctx.fillStyle = "#bf1fff";
                ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                for (var i = 0; i < arr.length; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = "#293241";
                    ctx.fillText(arr[i], (n-startValue) * dwidth + (dwidth) / 2 - 3.5, 244 + i * 12);
                }
            }
            ribo1.update();
            ribo2.update();
        }, 35);
    }
}
function Hold() {
    if(value==="1"){
        clearInterval(interval);
        interval = setInterval(function () {
            ctx.clearRect(0,0,750,300);
            dwidth = 750 / (endValue - startValue+ 1);
            high2=$("#high2").val();
            rare1();
            for (k = startValue; k <= endValue; k++) {
                ctx.beginPath();
                ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                ctx.fillStyle = '#5a97d4';
                ctx.fill();
                ctx.strokeStyle = '#143ed6';
                ctx.stroke();
                if (rFootPrint[k] > mean1+high2*std1) {
                    ctx.beginPath();
                    ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                    ctx.fillStyle = "red";
                    ctx.fill();
                }
                var Arr = [gene[k*3], gene[k*3+1], gene[k*3+2]];
                for(var i=0;i<rare_codons2.length;i++){
                    if (textCompare(Arr, rare_codons2[i])) {
                        if (rFootPrint[k] >mean1+high2*std1){
                            ctx.beginPath();
                            ctx.rect((k-startValue)* dwidth + 1.5, 220 - rFootPrint[k]/2,dwidth - 3, rFootPrint[k]/2);
                            ctx.fillStyle = "yellow";
                            ctx.fill();
                        }else {
                            ctx.beginPath();
                            ctx.rect((k-startValue)* dwidth + 1.5, 220 - rFootPrint[k],dwidth - 3, rFootPrint[k]);
                            ctx.fillStyle = "yellow";
                            ctx.fill();
                            ctx.strokeStyle = '#d67526';
                            ctx.stroke();
                        }
                    }
                }
            }
            for (n = startValue; n <= endValue; n++) {
                var arr = numChTextArr(n*3);
                ctx.beginPath();
                ctx.fillStyle = "#0b4fd6";
                ctx.fillRect(0, 220, 750, 1);
                ctx.beginPath();
                ctx.fillStyle = "#bf1fff";
                ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                if (rFootPrint[n] > mean1+high2*std1) {
                    ctx.beginPath();
                    ctx.fillStyle = "red";
                    ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                }
                var Arr = [gene[n*3], gene[n*3+1], gene[n*3+2]];
                for(var i=0;i<rare_codons2.length;i++){
                    if (textCompare(Arr, rare_codons2[i])) {
                        ctx.beginPath();
                        ctx.fillStyle = "#24d23b";
                        ctx.fillText(gene[n*3], (n - startValue) * dwidth + dwidth / 2 - 3.5, 232);
                    }
                }
                for (var i = 0; i < arr.length; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = "#293241";
                    ctx.fillText(arr[i], (n-startValue) * dwidth + dwidth / 2 - 3.5, 244 + i * 12);
                }
            }
            ribo1.stop();
            ribo2.stop();
        }, 35);
    }
    else{
        clearInterval(interval);
        interval = setInterval(function () {
            ctx.clearRect(0,0,750,300);
            dwidth = 750 / (endValue - startValue+ 1);
            for (k = startValue; k <= endValue; k++) {
                ctx.beginPath();
                ctx.rect((k - startValue) * dwidth + 1.5, 220 - rFootPrint[k], dwidth - 3, rFootPrint[k]);
                ctx.fillStyle = '#5a97d4';
                ctx.fill();
                ctx.strokeStyle = '#143ed6';
                ctx.stroke();
            }
            for (n = startValue; n <= endValue; n++) {
                var arr = numChTextArr(n*3);
                ctx.beginPath();
                ctx.fillStyle = "#0b4fd6";
                ctx.fillRect(0, 220, 750, 1);
                ctx.beginPath();
                ctx.fillStyle = "#bf1fff";
                ctx.fillText(gene[n*3], (n - startValue) * dwidth + (dwidth) / 2 - 3.5, 232);
                for (var i = 0; i < arr.length; i++) {
                    ctx.beginPath();
                    ctx.fillStyle = "#293241";
                    ctx.fillText(arr[i], (n-startValue) * dwidth + (dwidth) / 2 - 3.5, 244 + i * 12);
                }
            }
            ribo1.stop();
            ribo2.stop();
        }, 35);
    }
}
// function chartAreaClick(e){
//     var top=getY(charArea);
//     var left=getX(charArea);
//     var position = getPos(e);
//     var x = position.x - left-2;
//     var y = position.y- top-2;
//
//     console.log(x);
//     console.log(y);
//
//     if(x>=82&&x<=680&&y>=408&&y<=438){
//         generate();
//     }
// }

function f1() {
    $("#research").css("display","block");
}

function f2() {
    $("#sstudyname").text("GSE45803");
    $("#sspename").text("Yeast");
    $("#spubmid").text("4654981363");
}

function Bubble(ctx,x,y) {
    this.ctx=ctx;
    this.x=x;
    this.y=y;
    this.r=6;
    this.color="#ff5833";

    this.draw();
}
Bubble.prototype.draw = function () {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.arc(this.x,this.y,this.r,0,2*Math.PI,false);
    this.ctx.fill();
    this.ctx.closePath();
};
Bubble.prototype.update = function () {
    for(n=0;n<7;n++){
        if (this.x>=n*length*wtd/7 && this.x<((n+1)*length*wtd/7+3)) {
            this.x += (allSum/(time[n]*7));
        }
    }
    this.draw();
};
Bubble.prototype.stop = function(){
    this.x+= 0;
    this.draw();
};

function Ellipse(ctx,x,y,a,b,num1,num2,num3) {
    this.ctx=ctx;
    this.x=x;
    this.y=y;
    this.a=a;
    this.b=b;
    this.color="rgb("+ num1 + ","+ num2 + "," + num3 +")";

    this.draw();
}
Ellipse.prototype.draw = function () {
    var step = (this.a > this.b) ? 1 / this.a : 1 / this.b;
    this.ctx.beginPath();
    this.ctx.moveTo(this.x + this.a, this.y);
    for(var i = 0; i < 2 * Math.PI; i += step) {
        this.ctx.lineTo(this.x + this.a * Math.cos(i), this.y + this.b * Math.sin(i));
    }
    this.ctx.closePath();
    this.ctx.globalAlpha =0.8;
    this.ctx.fillStyle = "#ff773d";
    this.ctx.fill();
    this.ctx.strokeStyle = this.color;
    this.ctx.stroke();
};
Ellipse.prototype.update = function () {
    for (var j = startValue; j < endValue; j++) {
        if (this.x >= (j-startValue)*dwidth && this.x < ((j+1-startValue) * dwidth)) {
            if ((rFootPrint[j]/value) <= 50) {
                this.x += 1;
            } else {
                this.x += ((50.0*value)/rFootPrint[j]);
            }
        }
    }
    this.draw();
};
Ellipse.prototype.stop = function () {
    this.x+= 0;
    this.draw();
};

function avg(data) {
    var sum = function(x,y){ return x+y;};　　//求和函数
    var avg;
    avg = data.reduce(sum)/data.length;
    return avg;
}
function stdDev(data) {
    var sum = function(x,y){ return x+y;};　　//求和函数
    var square = function(x){ return x*x;};　　//数组中每个元素求它的平方

    var mean = data.reduce(sum)/data.length;
    var deviations = data.map(function(x){return x-mean;});
    var std = Math.sqrt(deviations.map(square).reduce(sum)/(data.length-1));
    return std;
}
function rare(){
    rare_codons1.length = 0;
    $("#Codons option:selected").each(function(){
        rare_codons1.push($(this).text());
    });
}
function rare1() {
    rare_codons2.length = 0;
    $("#Codons2 option:selected").each(function(){
        rare_codons2.push($(this).text());
    });
}
function createFootPrint(start,end,k) {
    var i=0,j=0,sum=0,refootPrint=[];
    while (i<Math.ceil((end-start+1)/k)){
        if(i===Math.floor((end-start+1)/k)){
            for(j=i*k+start;j<= end ;j++){
                sum+=footPrint[j];
            }
            refootPrint[i] = Math.round((sum*3)/((end-start+1)% k));

        }else{
            for(j=i*k+start;j<(i+1)*k+start;j++){
                sum+=footPrint[j];
            }
            refootPrint[i] = Math.round((sum*3)/k);
        }
        sum=0;
        i++;
    }
    return refootPrint;
}
function createXdata(k) {
    var num =[];
    for (var i=0;i<k;i++){
        num[i]=i;
    }
    return num;
}
function turnNum (nums){
    for(let i=0;i<nums.length;i++){
        nums[i] = parseInt(nums[i])
    }
    return nums;
}
function numChTextArr(num){
    var str = num+'';
    var Arr = str.split("");
    return Arr;
}
function textCompare(arr1,text){
    var arr2 =text.split("");
    for(var i=0;i<3;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}

function getX(obj){
    var parObj=obj;
    var left=obj.offsetLeft;
    while(parObj===parObj.offsetParent){
        left+=parObj.offsetLeft;
    }
    return left;
}
function getY(obj){
    var parObj=obj;
    var top=obj.offsetTop;
    while(parObj === parObj.offsetParent){
        top+=parObj.offsetTop;
    }
    return top;
}
function getPos(ev) {
    var scrollTop =document.documentElement.scrollTop||document.body.scrollTop;
    var scrollLeft =document.documentElement.scrollLeft||document.body.scrollLeft;

    return {x:ev.clientX+scrollLeft, y:ev.clientY+scrollTop}
}





