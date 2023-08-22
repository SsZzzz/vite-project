import axios from 'axios';

function query(params) {
  const { time, ...rest } = params;
  const [startTime, endTime] = (time || []).map((item) =>
    item.format('YYYY-MM-DD HH:mm:ss'),
  );
  return axios.get('/api/sys/operates', {
    params: { ...rest, startTime, endTime },
  });
}

export default { query };
