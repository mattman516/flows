import React from "react";
import $ from "jquery";
import SlackFeedback from "react-slack-feedback";

function sendToSlack(payload) {
  // if (payload.username === "Feedback User" || payload.username === "") {
  //   this.error("Not logged in")
  //   alert(
  //     'Please tell us your name by "logging in": hit the face icon in the top right, type a name into the email bar and hit Done.'
  //   );
  // } else {
    $.ajax({
      url: "https://hooks.slack.com/services/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",
      data: "payload=" + JSON.stringify(payload),
      dataType: "json",
      processData: false,
      type: "POST"
    }).then(
      res => {
        this.sent();
      },
      error => {
        if (error.status !== 200) {
          this.error(error.statusText);
        } else {
          this.sent();
        }
        console.log(error);
      }
    );
  // }
}

const ImportAddEdit = ({ user }) => (
  <div>
    <SlackFeedback
      onSubmit={sendToSlack}
      // onImageUpload={uploadImage}
      disabled={false} // completely disable the component (default = false)
      user={user || "Feedback User"} // The logged in user (default = "Unknown User")
    />
  </div>
);

export default ImportAddEdit;
