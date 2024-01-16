import foto from '../assets/perfil.jpg'
import {
  MailOutlined,
  PhoneOutlined, 
  LinkedinOutlined,
  LaptopOutlined,
  LockOutlined,
  MessageTwoTone} from '@ant-design/icons';

export const LeftColumn = () => {
  return (
    <>
        <div className="col-3 background gray bor-col text-center text-data color black">
          <img src={foto} className="profile img mt-2 mb-2" alt="Profile picture" /><br/>
          <span className="text-bold">Jaime Suárez Espinoza</span><br/>
          <span>Computer Systems Engineer</span>
          <hr className="border-hr"/>
          <span className="text-subtitles">CONTACT</span><br/>
          <div className="text-left">
            <MailOutlined/><span>&nbsp;jaime.sues13@gmail.com</span><br/>
            <PhoneOutlined/><span>&nbsp;3311190812</span><br/>
            <LinkedinOutlined/><a href="https://www.linkedin.com/in/jaime-su%C3%A1rez-9a4563191/" className="nav-linkedin">&nbsp;Linkedin</a><br/>
          </div>
          <hr className="border-hr"/>
          <span className="text-subtitles">KEY SKILLS</span><br/>
          <div className="text-left">
            <LaptopOutlined/><span className="color white">&nbsp;&gt;Programing Languages</span><br/>
            <span className="text-cursive">Java, C++, JavaScript</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle-empty"/><span className="icon-circle-empty"/><br/>
            <LockOutlined/><span className="color white">&nbsp;&gt;DataBases</span><br/>
            <span className="text-cursive">SQLServer, MYSQL, DB2</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle-opacity"/><span className="icon-circle-empty"/><span className="icon-circle-empty"/><br/>
            <LaptopOutlined/><span className="color white">&nbsp;&gt;Frameworks</span><br/>
            <span className="text-cursive">Spring Boot, ReactJS</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle-empty"/><span className="icon-circle-empty"/><span className="icon-circle-empty"/><br/>
            <LockOutlined/><span className="color white">&nbsp;&gt;OS</span><br/>
            <span className="text-cursive">Windows, Linux, MacOS</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle-empty"/><br/>
            <LaptopOutlined/><span className="color white">&nbsp;&gt;Other utilities</span><br/>
            <span className="text-cursive">Office tools, Excel(macros)</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle-empty"/><br/>
          </div>
          <hr className="border-hr"/>
          <span className="text-subtitles">LANGUAGES</span><br/>
          <div className="text-left">
            <MessageTwoTone/><span className="color white">&nbsp;Spanish - Native speaker</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle"/><br/>
            <MessageTwoTone/><span className="color white">&nbsp;English - Intermediate</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle-opacity"/><span className="icon-circle-empty"/><span className="icon-circle-empty"/><br/>
            <MessageTwoTone/><span className="color white">&nbsp;Portuguese - Basics</span><br/>
            <span className="icon-circle"/><span className="icon-circle"/><span className="icon-circle-empty"/><span className="icon-circle-empty"/><span className="icon-circle-empty"/><br/>
          </div>
          <hr className="border-hr"/>
          <span className="text-subtitles">CERTIFICATIONS</span><br/>
          <div className="text-left">
            <a href="https://www.credly.com/badges/f3b29e39-e685-49f3-885e-bf25f01bc3bd" className="nav-linkedin">&nbsp;IBM Agile Explorer</a><br/>
            <a href="https://www.credly.com/badges/b8895761-9595-447e-91d3-42005a1ce184" className="nav-linkedin">&nbsp;IBM CLOUD</a><br/>
          </div>
        </div>
    </>
  )
}
