import { FaPhone } from "react-icons/fa";
import ab from "../assets/image/about.jpg"
import Header from "../components/Header";

function About() {
  return (
    <div>
      <Header />
      <div className="mt-10 px-52 flex">
        <img src={ab} alt="Logo" className="" />
        <div className="ml-10">
          <span className="font-bold mb-5">GIỚI THIỆU – SIOLIDWORKS TUTORIAL VIỆT NAM</span>
          <p className="mb-5">SOLDIWORKS TUTORAIL VIỆT NAM – Là một trung tâm đào tạo phần mềm & thiết kế máy hàng đầu việt nam. Các phương pháp học và tư duy thiết kế được tôi rèn qua nhiều năm nghiên cứu thay đổi phương thức đào tạo- nhằm mục đích đào tạo các học viên nắm vững tay nghề thiết kế máy.</p>
          <p className="mb-5">SOLDIWORKS TUTORAIL VIỆT NAM- Được thành lập 2017 với 5 năm kinh nghiệm trong giảng dạy phần mềm solidwokrs & thiết kế máy chúng tôi tự tin đảm bảo đầu ra cho các học viên với lượng kiến thức thực tế tốt nhất thị trường</p>

        </div>
      </div>
    </div>
  );
}

export default About;
