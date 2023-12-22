import React, { useEffect } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import ApexCharts from "apexcharts";

function NftChart() {
  var options = {
    chart: {
      height: "100%",
      maxWidth: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      animations: {
        enabled: true,
      },
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: true,
      },
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
        shade: "#5521B5",
        gradientToColors: ["#ffffff000"],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 3,
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: 0,
      },
    },
    series: [
      {
        name: "price",
        data: [10, 12, 9, 13, 20, 6],
        color: "#D61F69",
      },
    ],
    xaxis: {
      categories: [
        "23 sep - 12 PM",
        "02 February",
        "03 February",
        "04 February",
        "05 February",
        "06 February",
        "07 February",
      ],
      labels: {
        show: true,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: true,
    },
  };

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector("#area-chart"), options);
    chart.render();

    return () => {
      if (chart && typeof chart.destroy === "function") {
        chart.destroy();
      }
    };
  }, []);

  return (
    <div id="chart" className="flex justify-center w-full h-full flex-col gap-4">
      <div className="w-full bg-white rounded-lg shadow dark:bg-darkBlue-600  bottom-2 p-4 md:p-6">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none  sm:text-3xl text-2xl font-bold text-gray-900 dark:text-white pb-2">
              34
            </h5>
            <p className="sm:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
              Trade of this week
            </p>
          </div>
          <div className="flex sm:text-base text-sm items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
            12%
            <FaLongArrowAltUp className="w-3 h-3 ms-1" />
          </div>
        </div>
        <div id="area-chart"></div>
      </div>
    </div>
  );
}

export default NftChart;
