# Simple React Rest Countries

Welcome to the Simple React Rest Countries project! This application showcases a simple implementation of fetching and displaying country data using React and the REST Countries API.

- **Live Site URL**: [Rest Countries API](https://reactjs-rest-countries-api-batch-09.netlify.app/)

## Introduction

This project aims to demonstrate how to build a React application that consumes an external API. We use the REST Countries API to fetch data about various countries and display it in a user-friendly manner.

## Features

- **Country List**: Display a list of countries with details like name, capital, population, and area.
- **Visit Tracker**: Mark countries as visited and keep track of them.

## Installation

To get started with this project, follow the steps below:

1. **Clone the repository**:

   ```sh
   git clone https://github.com/mahmud035/Level-1-Updated-Content.git

   cd 40. Simple React Rest Countries
   ```

2. **Install dependencies:**:

   ```sh
   npm install
   ```

3. **Run the application:**:

   ```sh
   npm run dev
   ```

## Project Structure

The project is organized as follows:

```Level-1-Updated-Content/
├── 40. Simple React Rest Countries/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── CountryList.tsx
│   │   │   ├── CountryCard.tsx
│   │   │   ├── CountryDetail.tsx
│   │   ├── hooks/
│   │   │   ├── useFetchCountries.ts
│   │   ├── styles/
│   │   ├── App.tsx
│   ├── README.md
│   ├── package.json
│   └── ...
```

- **src/components**: Contains reusable React components such as _CountryList_, _CountryCard_, and _CountryDetail_.

- **src/hooks**: Custom hooks for handling data fetching and other logic.

- **public**: Public assets and files.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes. Ensure that your code adheres to the project’s coding standards and includes necessary tests.
