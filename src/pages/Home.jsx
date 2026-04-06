import HeroBrand from '../components/HeroBrand';
import MarqueeStrip from '../components/MarqueeStrip';
import BrandStats from '../components/BrandStats';
import UpcomingEvents from '../components/UpcomingEvents';
import BrandStory from '../components/BrandStory';
import Testimonials from '../components/Testimonials';
import GalleryPreview from '../components/GalleryPreview';
import InstagramStrip from '../components/InstagramStrip';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <>
      <HeroBrand />
      <MarqueeStrip />
      <BrandStats />
      <UpcomingEvents />
      <BrandStory />
      <Testimonials />
      <GalleryPreview />
      <InstagramStrip />
      <Partners />
      <Newsletter />
    </>
  );
}
