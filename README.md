# MBTI 性格测评

## 项目简介

该项目实现了 MBTI（Myers-Briggs Type Indicator）性格测试，通过一系列问题，帮助用户了解自己的个性特征，并确定他们的 MBTI 类型。MBTI 将个性分为四个维度，最终组合出 16 种性格类型，用户可根据测试结果了解更多关于自己的信息。

[![Netlify Status](https://api.netlify.com/api/v1/badges/23517e74-f46e-42e3-8a82-0da688ff1aa9/deploy-status)](https://mbti.yaavi.me/)

部署在 Netlify，访问地址：[https://mbti.yaavi.me](https://mbti.yaavi.me)

## 功能特性

- **16 种 MBTI 类型**：通过测试了解您属于哪种 MBTI 类型（如：INTJ、ENFP）。
- **用户友好界面**：简洁直观的设计，引导用户完成测试问题。
- **结果展示**：测试结果展示您的 MBTI 类型，并提供详细的性格描述。
- **移动端兼容**：支持桌面和移动设备的访问。
- **问题自定义**：也可以修改问题，当作其他评估类的项目。

## 技术栈

纯前端，无需后端支持，基于 `Next.js` & `Chakra UI`。

## 本地运行

1. **克隆代码仓库**：
   ```bash
   git clone git@github.com:vsme/mbti.git
   ```

2. **安装依赖**：进入项目目录并安装所需依赖：
   ```bash
   cd mbti
   yarn
   ```

3. **启动开发服务器**：
   ```bash
   yarn dev
   ```

4. **访问应用**：
   在浏览器中打开控制台输出的链接，访问应用。

## MBTI 类型简介

MBTI 测试广泛应用于个人自我认知、职业规划、团队协作等领域，测试结果基于以下 16 种 MBTI 性格类型：

|                | **内向型 (Introvert, I)** | **外向型 (Extravert, E)** |
|----------------|---------------------------|---------------------------|
| **Sensing (S)** - 判断型 (Judging, J)      | ISTJ, ISFJ   | ESTJ, ESFJ   |
| **Sensing (S)** - 感知型 (Perceiving, P)   | ISTP, ISFP   | ESTP, ESFP   |
| **Intuition (N)** - 判断型 (Judging, J)    | INTJ, INFJ   | ENTJ, ENFJ   |
| **Intuition (N)** - 感知型 (Perceiving, P) | INTP, INFP   | ENTP, ENFP   |

PS: MBTI 测试虽然有一定的流行性，但它也有一定的争议性，在学术心理学领域的科学性和可靠性经常受到质疑。

## 贡献指南

您可以 Fork 本仓库并提交 Pull Request 来进行代码贡献。

英文原文文档在这里：[MBTI-personality-test.pdf](./public/MBTI-personality-test.pdf)，发现有翻译不准确的地方，欢迎完善项目中的 `/data` 部分。

## 许可证

该项目使用 MIT 许可证授权。

## 致谢

[Rauf](https://github.com/rauf-21/mbti-personality-test-app)