import ServiceList from "../../components/ServiceList";
import { flights } from "../../data/services";

export default function Flights() {
  return <ServiceList heading="Flights" intro="Popular routes with fares that include taxes." items={flights} unit="/ seat" />;
}
