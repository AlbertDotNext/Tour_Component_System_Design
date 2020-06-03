import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    { duration: '2m', target: 100 },
    { duration: '5m', target: 100 },
    // { duration: '2m', target: 300 },
    // { duration: '5m', target: 300 },
    // { duration: '3m', target: 400 },
    // { duration: '5m', target: 400 },
    { duration: '2m', target: 0 },
  ],
};

export default function() {
  let id = Math.floor(Math.random()*100000)
  const res = http.get(`http://localhost:3000/tour/${id}`);
  const checkRes = check(res, {
    "Error Rate": (r) => r.status !== 200,
    "Transaction time under 2000ms": (r) => r.timings.duration < 2000
  });
  sleep(1);
}