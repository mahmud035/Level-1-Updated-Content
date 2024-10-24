import Hero from '../components/Hero/Hero';
import JobCard from '../components/Job/JobCard';
import JobCategoryCard from '../components/Job/JobCategoryCard';
import Button from '../components/ui/Button';
import useFetchData from '../hooks/useFetchData';
import { IJob, IJobCategory } from '../types';

export default function HomePage() {
  const jobCategories = useFetchData<IJobCategory>('categories.json');
  const jobs = useFetchData<IJob>('jobs.json');

  return (
    <main>
      {/* Hero */}
      <div className="bg-[#F9F9FF]">
        <div className="px-4 mx-auto max-w-7xl">
          <Hero />
        </div>
      </div>

      {/* Job Category List */}
      <section className="px-4 pt-32 mx-auto font-light max-w-7xl">
        <h3 className="text-center text-5xl leading-[60px] text-[#1A1919]">
          Job Category List
        </h3>
        <p className="text-center leading-6 text-[#757575] pt-4 pb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jobCategories.map((category) => (
            <JobCategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="px-4 pt-32 mx-auto font-light max-w-7xl">
        <h3 className="text-center text-5xl leading-[60px] text-[#1A1919]">
          Featured Jobs
        </h3>
        <p className="text-center leading-6 text-[#757575] pt-4 pb-8">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <div className="flex justify-center pt-10 pb-32">
          <Button label="See All Jobs" className="rounded-lg" />
        </div>
      </section>
    </main>
  );
}