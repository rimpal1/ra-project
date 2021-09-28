import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

function Chart({ chartData }) {
   console.log(chartData);
   const groupChartData = (chartData) => {
      let map = new Map();
      chartData.forEach((data) => {
         const groupKey = Object.values(data)[Object.keys(data).indexOf("POP")];
         Object.entries(data).forEach(([key, value]) => {
            if (key === "POP") {
               return;
            }
            if (map.has(key)) {
               let getkeyVal = map.get(key);
               map.set(key, { ...getkeyVal, [groupKey]: value });
            } else {
               map.set(key, { [groupKey]: value, header: key });
            }
         });
      });
      const finalData = Array.from(map.values());
      console.log("finaldata", finalData);
      return finalData;
   };
   return (
      <div>
         {chartData && (
            <>
               <BarChart
                  width={1000}
                  height={300}
                  data={groupChartData(chartData)}
                  margin={{
                     top: 5,
                     right: 30,
                     left: 20,
                     bottom: 5
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="header" />
                  <YAxis domain={[0, "dataMax"]} allowDataOverflow={true} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="both" fill="#e07b0a" />
                  <Bar dataKey="diab" fill="#525ea8" />
                  <Bar dataKey="ckd" fill="#48b499" />
               </BarChart>
            </>
         )}
      </div>
   );
}

export default Chart;
