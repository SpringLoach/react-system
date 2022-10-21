import styled from "styled-components";

export const PageWrapper = styled.div`
  padding: 24px;
  .left-card {
    margin-bottom: 20px;
    text-align: center;
    .avatar-wrap {
      margin-bottom: 24px;
    }
    .info-avatar {
      width: 104px;
      height: 104px;
      border-radius: 50%;
      margin-bottom: 20px;
    }
    .info-name {
      margin-bottom: 4px;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
      font-size: 20px;
    }
  }
  .other-info-wrap {
    text-align: left;
    .other-info-row {
      padding-left: 26px;
      margin-bottom: 8px;
      .anticon {
        margin-right: 8px;
      }
    }
  }
  .tag-wrap {
    text-align: left;
    .item-title {
      margin-bottom: 12px;
    }
    .tag-list {
      .tag-item {
        margin-bottom: 8px;
      }
    }
  }
  .skill-wrap {
    text-align: left;
    .item-title {
      margin-bottom: 12px;
    }
    .skill-wrap-item {
      margin-bottom: 24px;
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .skill-wrap-icon {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin-right: 12px;
    }
  }
`