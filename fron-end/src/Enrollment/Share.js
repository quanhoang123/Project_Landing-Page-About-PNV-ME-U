import React, { Component } from "react";

export default class Share extends Component {
  render() {
    return (
      <div className="share">
        <div className="container">
          <div
            className="section-header text-center wow zoomIn"
            data-wow-delay="0.1s"
          >
            <p>Cảm nhận PNV</p>
            <h2>Chia sẻ từ giáo viên và sinh viên PNV</h2>
          </div>
          {/* <center><h2 style={{textShadow:"1px 1px 4px  #67d0f0"}}>Chia sẻ</h2></center> */}
          <div className="row">
            <div className="col-sm-4">
              <img
                src="imgPNV/pn.png"
                alt="Image"
                style={{ borderRadius: "50%", width: "10vh", height: "10vh" }}
              ></img>
              <p>
                Nhiều người đã hỏi em rằng “Tại sao là con gái mà mà lại chọn
                nghề IT này cho cực, sao không đi theo ngành giáo viên hay du
                lịch cho khỏe”, rồi “Con gái theo ngành này thì không bao giờ
                bằng con trai đâu”. Khi ấy em cũng không biết phải trả lời thế
                nào, chỉ biết rằng mình nhất định phải theo đuổi ước mơ này dù
                có chuyện gì. Em tin rằng nếu cố gắng thì em sẽ làm được. Và em
                đã chọn PN là nơi nuôi dưỡng ước mơ ấy.”
              </p>
              <b>Ngô Thị Mỹ Hoài_ Sinh viên PNV khóa 2023</b>
            </div>
            <div className="col-sm-4">
              <img
                src="imgPNV/pn.png"
                alt="Image"
                style={{ borderRadius: "50%", width: "10vh", height: "10vh" }}
              ></img>
              <p>
                Người ta luôn nghĩ rằng thế giới CNTT rất lạnh lẽo vì chỉ toàn
                máy móc và AI. Nhưng thông qua PN, tôi đã khám phá lại khía cạnh
                nhân văn của công nghệ. Những nụ cười tươi tắn hay hay những
                gương mặt tò mò của sinh viên đã gợi nhớ cho tôi về lí do mà
                mình bắt đầu học code. Chính là vì thế giới trong máy tính và
                những tiến bộ công nghệ tràn đầy sức hấp dẫn ấy! Ở PN Việt Nam,
                chúng tôi đang đào tạo ra những kỹ sư công nghệ từ những sinh
                viên lớn lên cùng việc đồng áng – nhiều em thậm chí còn chưa
                từng chạm vào máy tính trước đây. Và chúng tôi rất tận hưởng
                điều đó, bởi tại sao không chứ?
              </p>
              <b>Lucas Sinrod_Giám đốc Đào tạo & IT PNV</b>
            </div>

            <div className="col-sm-4">
              <img
                src="imgPNV/alumni.png"
                alt="Image"
                style={{ borderRadius: "50%", width: "10vh", height: "10vh" }}
              ></img>
              <p>
                PN Việt Nam đến như một phép màu. Chúng em là khóa đâu tiên của
                chương trình đào tạo mới kéo dài 3 năm. Chúng em đã có nhiều
                thời gian hơn để tìm hiểu các công nghệ tiên tiến mà các công ty
                cần, cũng như cải thiện khả năng tiếng Anh và kĩ năng mềm của
                mình – những hành trang cần thiết trên con đường sự nghiệp.
                Chúng em được học cách trở thành một thành viên có giá trị trong
                nhóm, một nhà lãnh đạo tài tình, hoặc thậm chí là một doanh nhân
                thành công. Và hơn hết, học phần Chuyên môn hóa và kỳ thực tập
                cuối cùng chính là cơ hội để em tăng khả năng được tuyển dụng
                của mình một cách đáng kinh ngạc. Bây giờ, em rất tự hào khi nói
                rằng em đã có thể chăm sóc cho bản thân và gia đình. Em cảm thấy
                có thêm động lực để cống hiến cho cộng đồng bằng cách tham gia
                Hội Cựu sinh viên PN Việt Nam và các hoạt động xã hội khác.
              </p>
              <b>Nguyễn Hữu Cường_ Cựu sinh viên PNV khóa 2019<br></br>_Lập trình viên full stack tại <a href="https://mgmtp.recruiterbox.com/?country=Vietnam&q=&limit=25">MGM</a></b>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
