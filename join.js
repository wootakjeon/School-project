function validate() {
        //event.preventDefault();
        var objID = document.getElementById("name");
        var objPwd1 = document.getElementById("password");
        var objPwd2 = document.getElementById("passwordCheck");
        var objEmail = document.getElementById("email");
        var objName = document.getElementById("name");
        var objNickname = document.getElementById("nickname");

        //아이디와 패스워드 값 데이터 정규화 공식
        var regul1 = /^[a-zA-Z0-9]{4,12}$/;
        //이메일 값 데이터 유효성 체크
        //[]안에 있는 값만 쓰겠다
        var test = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
        //이메일 정규화 공식
        var regul2 = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/;
        //이름 정규화 공식
        var regul3 = /^[가-힝a-zA-Z]{2,}$/;
        //var email = RegExp(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/);
        

        //이메일 입력 안했을 경우
        if ((objEmail.value)=="") {
            document.getElementById("emailError").innerHTML="이메일을 입력해주세요.";
            objEmail.focus();
            return false;
        } else { document.getElementById("emailError").innerHTML=""; }
        //이메일이 잘못된 경우
        if (!check(test,objEmail)) {
            document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다.";
            return false;
        } else { document.getElementById("emailError").innerHTML=""; } 
        /*if(!regul2.test(objEmail.value)){
            document.getElementById("emailError").innerHTML="이메일이 올바르지 않습니다."
            return false;
          }*/
        //비밀번호 입력 하지 않았을 경우
        if ((objPwd1.value) == ""){
            document.getElementById("passwordError").innerHTML="비밀번호를 입력해주세요..";
            objPwd1.focus();
            return false;
        } else { document.getElementById("passwordError").innerHTML=""; }
        if ((objPwd2.value=="")){
            document.getElementById("passwordCheckError").innerHTML="비밀번호 확인을 입력해주세요.";
            objPwd2.focus();
            return false;
        } else { document.getElementById("passwordCheckError").innerHTML="";}
        //비밀번호 유효성 검사
        //만약 내가 비밀번호에 정규화 방식을 하나라도 지키지 않으면 if문 안으로 들어가서 alert message를 띄움
        if (!check(regul1,objPwd1,"비밀번호는 4~12자의 대소문자와 숫자로만 입력 가능합니다.")) {
            return false;
        }
        
        //비밀번호와 비밀번호 확인이 일치 하지 않을 경우
        if ((objPwd1.value)!=(objPwd2.value)) {
            document.getElementById("passwordCheckError").innerHTML="비밀번호가 일치하지 않습니다.";
            objPwd1.focus();
            objPwd2.focus();
            return false;
        } else { document.getElementById("passwordCheckError").innerHTML="";}
        //이름 입력 안 한 경우
        if ((objName.value)=="") {
            document.getElementById("nameError").innerHTML="이름을 입력해주세요.";
            objName.focus();
            return false;
        } else { document.getElementById("nameError").innerHTML="";}
        //이름에 특수 문자가 들어간 경우
        if (!check(regul3,objName,"이름이 잘못 되었습니다.")) {
            return false;
        }
        //닉네임 입력 안 한 경우
        if ((objNickname.value)=="") {
            document.getElementById("nicknameError").innerHTML="닉네임을 입력해주세요.";
            objNickname.focus();
            return false;
        } else { document.getElementById("nicknameError").innerHTML="";}
        //닉네임 특수 문자가 들어간 경우
        if (!check(regul3,objNickname,"닉네임이 잘못 되었습니다.")) {
            return false;
        }
    }

    function check(re,what){//정규화데이터,아이템 id,메세지
        if (re.test(what.value)) {//what의 문자열에 re의 패턴이 있는지 나타내는 함수 test
        //만약 내가 입력한 곳의 값이 정규화 데이터를 썼다면 true를 반환해서 호출 된 곳으로 리턴됨
            return true;
        }
        //alert(message);
        what.value = "";
        what.focus();
    }

    /*
    //아이디 입력 하지 않았을 경우
        if ((objID.value) == ""){
            alert("아이디를 입력하지 않았습니다.");
            objID.focus();
            return false;
        }
        //아이디 유효성 검사
        //내가 입력한 데이터를 검사하는 check()
        //만약 내가 아이디에 정규화 방식을 하나라도 지키지 않으면 if문 안으로 들어가서 alert message를 띄움
        if (!check(regul1,objID,"아이디는 4~12자의 대소문자와 숫자로만 입력 가능합니다.")) {
            return false;//반환 할 곳 없이 if문 탈출
        }
    */