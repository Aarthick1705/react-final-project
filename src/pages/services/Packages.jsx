import ServiceList from "../../components/ServiceList";
import { packages } from "../../data/services";

export default function Packages() {
  return <ServiceList heading="Packages" intro="Flights, stay and local transport bundled at one price." items={packages} unit="/ person" />;
}
