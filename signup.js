function validateForm() {
  // 비밀번호 확인이 일치하는지 확인
  const password = document.getElementById('password').value;
  const passwordConfirm = document.getElementById('passwordConfirm').value;
  if (password !== passwordConfirm) {
    alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
    return false; 
  }

  // 이메일 형식 검사
  const email = document.getElementById('email').value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  if (!emailPattern.test(email)) {
    alert('유효한 이메일 주소를 입력해주세요.');
    return false;
  }

  // 전화번호 형식 검사 (예시: 010-1234-5678)
  const phone = document.getElementById('phone').value;
  const phonePattern = /^(\d{3})-(\d{4})-(\d{4})$/;
  if (!phonePattern.test(phone)) {
    alert('전화번호는 010-1234-5678 형식이어야 합니다.');
    return false;
  }
  // 아이디 유효성 검사 (영문, 숫자만 가능, 6자 이상)
  const userid = document.getElementById('userid').value;
  const useridPattern = /^[a-zA-Z0-9]{6,}$/;
  if (!useridPattern.test(userid)) {
    alert('아이디는 영문과 숫자만 사용 가능하며 6자 이상이어야 합니다.');
    return false;
  }
  // 모든 검사 통과 시 폼 제출 허용
  return true;
}


document.getElementById('signupForm').addEventListener('submit', function(event) {
  event.preventDefault(); // 폼의 기본 제출 동작을 막기


  // validateForm 함수를 사용하여 폼의 입력값을 검사
  if (!validateForm()) {
    return 
  }
  // 폼의 입력값을 변수에 저장
  let userid = document.getElementById('userid').value;
  let name = document.getElementById('name').value;
  let phone = document.getElementById('phone').value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  let email = document.getElementById('email').value;

  // 확인용 알림창 출력
if (confirm( (`${name}님, 가입을 횐영합니다 ! \n
  입력하신 정보는 다음과 같습니다. \n
  아이디: ${userid}\n
  이름: ${name} (${gender})\n
  전화번호: ${phone}\n
  이메일: ${email}\n
  \n확인 버튼을 누르면 메인 페이지로 이동합니다.`))) {
  window.location.href = 'admin.html';
}
});
