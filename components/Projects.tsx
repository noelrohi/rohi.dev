import { getPinnedRepos } from '~/src/lib/api';
import { Heading } from './Heading';
import { ExternalLinkIcon } from './icons';
import { Link } from './Link';
import { tag } from '@/lib/constants';

export const Projects = async () => {
  const datas = await getPinnedRepos();

  return (
    <section>
      <Heading>
        <Link variant="text" href={`https://github.com/${tag.github}`}>
          Projects
        </Link>
      </Heading>

      <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 ">
        {datas.map(({ link, description, website, repo }, idx) => (
          <Link
            key={idx}
            href={website ?? link}
            variant="text"
            className="group relative top-0 rounded-md border border-neutral-300 px-4 py-3 transition-all hover:top-[-2px] hover:no-underline hover:opacity-90 dark:border-neutral-800"
          >
            <div className="flex items-center">
              <div className="text-lg font-semibold">{`${repo}`}</div>

              <ExternalLinkIcon
                size={3}
                className="mb-0.5 ml-2 opacity-0 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div className="pointer-events-none text-sm font-normal opacity-80">
              {description}
            </div>
          </Link>
        ))}
        <Link
          variant="text"
          href={`https://github.com/${tag.github}?tab=repositories`}
          className="ml-2"
        >
          See more ...
        </Link>
      </div>
    </section>
  );
};
