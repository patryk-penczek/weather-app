const WeatherDate = ({ data }) => {
  let epochDate = data.dt;
  let humanDate = new Date(epochDate * 1000);
  return (
    <>
      <h1 className="text-lg">{humanDate.toLocaleDateString()}</h1>
    </>
  );
};

export default WeatherDate;
