import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";

const TitleSectionContainer = styled.div`
  align-items: center;
  justify-content: space-between;
  width: 61%;
  padding: 20px;
  box-sizing: border-box;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;

  &.slide-up {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  @media (max-width: 700px) {
    width: 90%;
    padding: 10px;
    margin-top: 30px;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-size: 1.1rem;
  color: #2e7d32; 
  margin-bottom : 15rem;

  input,
  textarea {
    padding: 12px;
    border-radius: 6px;
    border: 1px solid #a5d6a7; /* 연초록 테두리 */
    font-size: 1rem;
    background-color: #f1f8f4; /* 은은한 초록 배경 */
    resize: none;
    width: 100%;
    box-sizing: border-box;
  }

  textarea {
    height: 150px;
  }

  position: relative;
`;

const SubmitButton = styled.button`
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 100px;
  padding: 10px;
  background-color: #66bb6a; /* 연초록 */
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #388e3c;
  }

  &:active {
    background-color: #2e7d32;
  }

  @media (max-width: 700px) {
    right: 0;
    bottom: -60px;
  }
`;

const ContactForm = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setIsVisible(true);
        }, 400);
        return () => clearTimeout(timer);
    }, []);


    const [form, setForm] = useState({
        name: "",
        message: "",
    });

    const [isSent, setIsSent] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                name: form.name,
                message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );

        setIsSent(true);
        setForm({ name: "", message: "" });
        } catch (error) {
        console.error("이메일 전송 실패:", error);
        alert("문의 전송에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <TitleSectionContainer className={isVisible ? "slide-up" : ""}>
          <StyledForm onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={form.name}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="문의 내용을 입력하세요. 응원의 한마디 보내주면 뀨엘팀이 힘나요."
              value={form.message}
              onChange={handleChange}
              required
            />
            <SubmitButton type="submit">보내기</SubmitButton>
          </StyledForm>
      
          {isSent && <p style={{ color: "#2e7d32", marginTop: "1rem", fontWeight: "bold" }}>문의가 전송되었습니다. 감사합니다!</p>}
        </TitleSectionContainer>
      );
};

export default ContactForm;