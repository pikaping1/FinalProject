<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ include file="/includes/libs.jsp"%>

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />

<title>合約登錄</title>

<style>
fieldset {
	width: 500px;
	margin: 15px;
	border-radius: 20px;
	margin: auto;
	text-align: center;
}

legend {
	font-size: 18px;
	display: inline-block;
	padding: 15px 10px;
}
</style>
</head>

<body style="padding-top: 9%" id="app">
<%@ include file="../toolbar/navbar.jsp"%>
	<!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~form~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->

	<div class="container">
		<p style="font-size: 30px; text-align: center; margin-bottom: 10px">
			合約登錄</p>
		<!--欄位1-->
		<div
			class="row g-3 align-items-center justify-content-center mb-1 mt-1">
			<div class="col-auto text-center">
				<label for="" class="col-form-label">合約編號</label>
			</div>
			<div class="col-auto text-center">
				<input type="text" id="" class="form-control" required
					v-model="findContractNumber" />
			</div>

		</div>

		<!--欄位2-->
		<div
			class="row g-3 align-items-center justify-content-center mb-1 mt-1">
			<div class="col-auto text-center">
				<label for="" class="col-form-label">廠商名稱</label>
			</div>
			<select class="form-select" aria-label="Default select example"
				style="width: 200px" v-model="findSuppliersId">
				<option selected :value="">[選擇廠商名稱]</option>
				<!--~~~~~~~~~~~~~~~~~~用迴圈~~~~~~~~~~~~~~~~~~-->
				<option v-for="item in suppliersData" v-bind:key="item.suppliersId"
					:value="item.suppliersId.toString()">{{item.suppliersName}}</option>

			</select>

		</div>
		<div class="col-auto text-center row">
			<p id="" class="form-text">
				※若選單中無此合約之廠商，請先新增廠商資料 ➜➜➜ <a
					href="<c:url value="/showAddSupplierPage"></c:url>">前往新增</a>
			</p>
		</div>


		<!--欄位3-->
		<div
			class="row g-3 align-items-center justify-content-center mb-1 mt-1">
			<div class="col-auto text-center">
				<label for="" class="col-form-label">合約起日</label>
			</div>
			<div class="col-auto text-center">
				<input type="date" id="" class="form-control" required
					v-model="findStartDate" @blur="checkStartDate(findSuppliersId)"/>
			</div>
			<div class="col-auto text-center">
				<span id="" class="form-text" style="color: red">
					{{startDateMessage}} {{overSigningDateMessage}}</span>
			</div>
		</div>

		<!--欄位4-->
		<div
			class="row g-3 align-items-center justify-content-center mb-1 mt-1">
			<div class="col-auto text-center">
				<label for="" class="col-form-label">合約迄日</label>
			</div>
			<div class="col-auto text-center">
				<input type="date" id="" class="form-control" required
					v-model="findEndDate" @blur="checkEndDate(findSuppliersId)"/>
			</div>
			<div class="col-auto text-center">
				<span id="" class="form-text" style="color: red" v-if="endDateMessage!=''&&overSupplierEndDateMessage!=''">
					1.{{endDateMessage}} 2.{{overSupplierEndDateMessage}}</span>
				<span id="" class="form-text" style="color: red" v-if="endDateMessage==''&&overSupplierEndDateMessage!=''">
					{{overSupplierEndDateMessage}}</span>
				<span id="" class="form-text" style="color: red" v-if="endDateMessage!=''&&overSupplierEndDateMessage==''">
					{{endDateMessage}}</span>
			</div>
		</div>

		<!--欄位5-->
		<div
			class="row g-3 align-items-center justify-content-center mb-1 mt-1">
			<div class="col-auto text-center">
				<label for="" class="col-form-label">合約標題</label>
			</div>
			<div class="col-auto text-center">
				<input type="text" id="" class="form-control" required
					v-model="findContractTitle" />
			</div>
		</div>

		<!--欄位6-->
		<div
			class="row g-3 align-items-center justify-content-center mb-1 mt-1">
			<div class="col-auto text-center">
				<label for="" class="col-form-label">合約金額</label>
			</div>
			<div class="col-auto text-center">
				<input type="number" id="" class="form-control" required
					v-model="findAmount" />
			</div>
		</div>

		<div style="text-align: center; margin-top: 10px; margin-bottom: 10px">
			<button class="btn btn-outline-success" @click="callAddContracts()">新增</button>
		</div>
	</div>


	<script type="text/javascript">
		const contextPath = "${pageContext.request.contextPath}";
	</script>

	<script type="text/javascript"
		src="${pageContext.request.contextPath}/js/contracts/contracts_add.js"></script>


</body>
</html>
