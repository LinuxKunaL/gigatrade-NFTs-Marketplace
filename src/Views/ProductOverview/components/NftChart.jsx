import React, { useEffect, useState } from "react";
import { FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import ApexCharts from "apexcharts";
import { NFTsChartData } from "../../../hooks/ContractControllers/useFetchChartOfNFT";

function NftChart({ NFTid }) {
  const [ChartData, setChartData] = useState({
    Price: [],
    Time: [],
  });

  const [options, setOptions] = useState({
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
        data: [],
        color: "#D61F69",
      },
    ],
    xaxis: {
      categories: [],
      labels: {
        show: false,
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
      labels: {
        show: false,
      },
    },
  });

  const FetchChatData = async () => {
    var chartData = {
      Price: [],
      Time: [],
    };
    try {
      const result = await NFTsChartData(NFTid);
      result.map((element) => {
        chartData.Price.push(Number(element.price));
        chartData.Time.push(
          new Date(element.time).toLocaleString("en-US", {
            month: "short", // Jan, Feb, Mar, ...
            day: "numeric", // 1, 2, 3, ...
            hour: "numeric", // 12-hour format
            minute: "numeric", // Minutes
            hour12: true, // AM/PM
          })
        );
      });
      setChartData(chartData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setOptions((prevOptions) => ({
      ...prevOptions,
      series: [
        {
          name: "price",
          data: ChartData.Price,
          color: "#D61F69",
        },
      ],
      xaxis: {
        categories: ChartData.Time,
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
    }));
  }, [ChartData]);

  useEffect(() => {
    FetchChatData();
  }, [NFTid]);

  useEffect(() => {
    var chart = new ApexCharts(document.querySelector("#area-chart"), options);
    chart.render();

    return () => {
      if (chart && typeof chart.destroy === "function") {
        chart.destroy();
      }
    };
  }, [options]);

  const calculateUpDownWithPercentage = (prices) => {
    const results = [];

    for (let i = 1; i < prices.length; i++) {
      const priceDifference = prices[i] - prices[i - 1];
      const percentageChange = (priceDifference / prices[i - 1]) * 100;

      let direction;
      if (priceDifference > 0) {
        direction = "up";
      } else if (priceDifference < 0) {
        direction = "down";
      } else {
        direction = "no change";
      }

      results.push({
        price: prices[i],
        direction,
        percentageChange,
      });
    }

    return results;
  };

  const tradeStates = () => {
    const priceChanges = calculateUpDownWithPercentage(ChartData.Price);

    const lastChange =
      priceChanges.length > 0 ? priceChanges[priceChanges.length - 1] : null;

    const directionClass =
      lastChange?.direction === "up"
        ? "text-green-500 dark:text-green-500"
        : "text-red-500 dark:text-red-500";

    return lastChange ? (
      <div
        className={`flex sm:text-base text-sm items-center px-2.5 py-0.5 font-semibold ${directionClass} text-center`}
      >
        {Number(lastChange.percentageChange)?.toFixed(0) + "%"}
        {lastChange.direction === "up" ? (
          <FaLongArrowAltUp className="w-3 h-3 ms-1" />
        ) : (
          <FaLongArrowAltDown className="w-3 h-3 ms-1" />
        )}
      </div>
    ) : null;
  };

  return (
    <div
      id="chart"
      className="flex justify-center w-full h-full flex-col gap-4"
    >
      <div className="w-full bg-white rounded-lg shadow dark:bg-darkBlue-600  bottom-2 p-4 md:p-6">
        <div className="flex justify-between">
          <div>
            <h5 className="leading-none  sm:text-3xl text-2xl font-bold text-gray-900 dark:text-white pb-2">
              {ChartData.Price.length}
            </h5>
            <p className="sm:text-base text-sm font-normal text-gray-500 dark:text-gray-400">
              Trade of this week
            </p>
          </div>
          {tradeStates()}
        </div>
        <div id="area-chart"></div>
      </div>
    </div>
  );
}

export default NftChart;
