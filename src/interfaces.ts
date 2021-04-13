// API interfaces **************************

export interface ITciketSegment {
  // Код города (iata)
  origin: string;
  // Код города (iata)
  destination: string;
  // Дата и время вылета туда
  date: string;
  // Массив кодов (iata) городов с пересадками
  stops: string[];
  // Общее время перелёта в минутах
  duration: number;
}

export interface ITicket {
  // Цена в рублях
  price: number;
  // Код авиакомпании (iata)
  carrier: string;
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: ITciketSegment[];
}

// ***********************************

export interface IRootState {
  tickets: ITicketsState;
  filters: FilterStateType;
  sort: SortIdsType;
}


export type ISortTickets = {
  [key in number]: ITicket[];
};

export interface ISortTicketsByStops {
  ticketsCount: number;
  ticketsSortedByStops: ISortTickets;
}

export interface ITicketsState {
  isFetching: boolean;
  stop: boolean;
  ticketsCount: number;
  ticketsSortedByStops: ISortTickets;
}

export interface ISearchResult {
  tickets: [];
  stop: boolean;
}

export interface ITicketDescription {
  fromTo: string;
  duration: string;
  departureTime: string;
  arraivalTime: string;
  renderStops: string;
  stopsCount: string;
}

export type FilterIdsType = 'all' | number;

export type FilterType = {
  label: string;
  id: FilterIdsType;
};

export type FilterStateType = {
  [key in FilterIdsType]?: boolean;
};

export type SortIdsType = 'cheapest' | 'fastest' | 'optimal';

type SortType = {
  label: string;
  id: SortIdsType;
};

export type SortTabsType = Array<SortType>;

// Props interfaces *******************

export interface ITicketItemProps {
  price: string;
  imgUrl: string;
  forwardWayFromTo: string;
  forwardWayDepartureTime: string;
  forwardWayArraivalTime: string;
  forwardWayDuration: string;
  forwardWayStopsCount: string;
  forwardWayRenderStops: string;
  backWayFromTo: string;
  backWayDepartureTime: string;
  backWayArraivalTime: string;
  backWayDuration: string;
  backWayStopsCount: string;
  backWayRenderStops: string;
}

export interface INextResultsButtonProps {
  onAddItems: () => void;
}

export interface ILoadingBarProps {
  ticketsCount: number;
  stop: boolean;
}

export interface IFilterCheckboxProps {
  id: FilterIdsType;
  label: string;
  checked: boolean;
  changeFilterId: (id: FilterIdsType) => void;
}

export interface IButtonProps {
  label: string;
  onClick: () => void;
  type: 'button' | 'submit';
  btnClasses: string[];
}

export interface ITicketsListProps {
  tickets: ISortTickets;
  sortById: SortIdsType;
  activeFilterId: FilterIdsType[];
  getTicketsFromService: () => void;
  isFetching: boolean;
  stop: boolean;
  ticketsCount: number;
}

export interface ITicketITemContainerProps {
  ticket: ITicket;
}

export interface ISortBarProps {
  activeTab: SortIdsType;
  onChangeSortId: (id: SortIdsType) => void;
}

export interface IFilterBarProps {
  activeFiltersId: FilterIdsType[];
  onChangeFilterId: (id: FilterIdsType) => void;
}
