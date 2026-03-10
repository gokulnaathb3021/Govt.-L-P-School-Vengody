export default function getAdmissionNumber(slug: string) {
  let n = slug.length;
  let admissionNumber: number = 0;
  for (let i = 0; i < slug.length; i += 1) {
    admissionNumber += Number(slug[i]) * Math.pow(10, n - 1);
    n -= 1;
  }
  return Number(admissionNumber);
}
