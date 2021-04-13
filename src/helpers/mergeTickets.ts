import { ISortTickets } from '../interfaces';

function mergeTickets(
  stateTickets: ISortTickets,
  actionTickets: ISortTickets
): ISortTickets {
  const stateTicketsKeys = Object.keys(stateTickets);
  const actionTicketsKeys = Object.keys(actionTickets);
  const totallyKeys = [...stateTicketsKeys, ...actionTicketsKeys];

  const mergedTickets: ISortTickets = totallyKeys.reduce(
    (acc: ISortTickets, key: string) => {
      const numKey = Number.parseInt(key, 10);
      const stateTicketsArr = stateTickets[numKey];
      const actionTicketsArr = actionTickets[numKey];

      if (stateTicketsArr !== undefined && actionTicketsArr !== undefined) {
        acc[numKey] = [...stateTicketsArr, ...actionTicketsArr];
        return acc;
      }
      if (stateTicketsArr === undefined && actionTicketsArr !== undefined) {
        acc[numKey] = [...actionTicketsArr];
        return acc;
      }
      if (stateTicketsArr !== undefined && actionTicketsArr === undefined) {
        acc[numKey] = [...stateTicketsArr];
        return acc;
      }
      return acc;
    },
    {}
  );

  return mergedTickets;
}

export default mergeTickets;
