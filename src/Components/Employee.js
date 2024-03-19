import React from "react";
import "./Employee.css";
import { Card } from "antd";
import { FaUserEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Employee() {
    return (
        <div className="employee-main-div">
            <div className="employee-card-container">
                <Card title="Employee" extra={
                    <div className="action-icon"><a href="#"><FaUserEdit /></a><a href="#"><MdDelete /></a></div>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <div className="employee-card-container">
                <Card title="Employee" extra={
                    <div className="action-icon"><a href="#"><FaUserEdit /></a><a href="#"><MdDelete /></a></div>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <div className="employee-card-container">
                <Card title="Employee" extra={
                    <div className="action-icon"><a href="#"><FaUserEdit /></a><a href="#"><MdDelete /></a></div>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <div className="employee-card-container">
                <Card title="Employee" extra={
                    <div className="action-icon"><a href="#"><FaUserEdit /></a><a href="#"><MdDelete /></a></div>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <div className="employee-card-container">
                <Card title="Employee" extra={
                    <div className="action-icon"><a href="#"><FaUserEdit /></a><a href="#"><MdDelete /></a></div>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
            <div className="employee-card-container">
                <Card title="Employee" extra={
                    <div className="action-icon"><a href="#"><FaUserEdit /></a><a href="#"><MdDelete /></a></div>} style={{ width: 300 }}>
                    <p>Card content</p>
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </div>
        </div>
    )
}

export default Employee;