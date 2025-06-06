var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "61000",
        "ok": "10",
        "ko": "60990"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "444",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60066",
        "ok": "863",
        "ko": "60066"
    },
    "meanResponseTime": {
        "total": "9520",
        "ok": "731",
        "ko": "9521"
    },
    "standardDeviation": {
        "total": "20731",
        "ok": "140",
        "ko": "20733"
    },
    "percentiles1": {
        "total": "18",
        "ok": "778",
        "ko": "18"
    },
    "percentiles2": {
        "total": "97",
        "ok": "822",
        "ko": "97"
    },
    "percentiles3": {
        "total": "58146",
        "ok": "863",
        "ko": "58398"
    },
    "percentiles4": {
        "total": "60035",
        "ok": "863",
        "ko": "60037"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 0.009836065573770491
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0.006557377049180329
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 60990,
    "percentage": 99.98360655737704
},
    "meanNumberOfRequestsPerSecond": {
        "total": "412.16",
        "ok": "0.07",
        "ko": "412.09"
    }
},
contents: {
"req_submit-change-i--1673609594": {
        type: "REQUEST",
        name: "Submit Change In Name Form",
path: "Submit Change In Name Form",
pathFormatted: "req_submit-change-i--1673609594",
stats: {
    "name": "Submit Change In Name Form",
    "numberOfRequests": {
        "total": "61000",
        "ok": "10",
        "ko": "60990"
    },
    "minResponseTime": {
        "total": "1",
        "ok": "444",
        "ko": "1"
    },
    "maxResponseTime": {
        "total": "60066",
        "ok": "863",
        "ko": "60066"
    },
    "meanResponseTime": {
        "total": "9520",
        "ok": "731",
        "ko": "9521"
    },
    "standardDeviation": {
        "total": "20731",
        "ok": "140",
        "ko": "20733"
    },
    "percentiles1": {
        "total": "18",
        "ok": "778",
        "ko": "18"
    },
    "percentiles2": {
        "total": "97",
        "ok": "822",
        "ko": "97"
    },
    "percentiles3": {
        "total": "58355",
        "ok": "863",
        "ko": "58414"
    },
    "percentiles4": {
        "total": "60037",
        "ok": "863",
        "ko": "60037"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 0.009836065573770491
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0.006557377049180329
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 0,
    "percentage": 0.0
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 60990,
    "percentage": 99.98360655737704
},
    "meanNumberOfRequestsPerSecond": {
        "total": "412.16",
        "ok": "0.07",
        "ko": "412.09"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
