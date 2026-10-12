import ServiceList from "../../components/ServiceList";
import { hotels } from "../../data/services";

export default function Hotels() {
  return <ServiceList heading="Hotels" intro="Verified stays with clear cancellation terms." items={hotels} unit="/ night" />;
}
