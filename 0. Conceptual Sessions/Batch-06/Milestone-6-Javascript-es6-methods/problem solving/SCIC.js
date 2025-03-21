const students = [
  {
    name: 'mehedy bro',
    email: 'mehedy@gamil.com',
    avg: 56,
    fiftyPercent: true,
  },
  { name: 'rokib bro', email: 'rokib@gamil.com', avg: 57, fiftyPercent: true },
  { name: 'sakib bro', email: 'sakib@gamil.com', avg: 42, fiftyPercent: false },
  { name: 'sojib bro', email: 'sojib@gamil.com', avg: 52, fiftyPercent: true },
  { name: 'sunny bro', email: 'sunny@gamil.com', avg: 32, fiftyPercent: false },
  { name: 'saki bro', email: 'sunny@gamil.com', avg: 37, fiftyPercent: false },
  {
    name: 'jackie bro',
    email: 'jackie@gamil.com',
    avg: 57,
    fiftyPercent: true,
  },
];

const result = students.filter(
  (student) => student.avg >= 50 && student.fiftyPercent === true
);

result.forEach((odhom) => {
  const { name, email } = odhom;

  console.log(`Odhom er naam ${name}. Odhom er email ${email}`);
  console.log(name);
  console.log(email);
});
