package com.ispan.buyallgoods.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class PageController {
	
	@RequestMapping("/test")
	public String test() {
		return "test/test";
	}
	

	@GetMapping("/")
	public String home() {
		return "index";
	}

	@RequestMapping("/showAddSupplierPage")
	public String showAddSupplierPage() {
		return "suppliers/suppliers_add";
	}

	@RequestMapping("/showSupplierPage")
	public String showSupplierPage() {
		return "suppliers/suppliers_view";
	}

	@RequestMapping("/showAddContractsPage")
	public String showAddContractsPage() {
		return "contracts/contracts_add";
	}

	@RequestMapping("/showSuppliersDetailsPage")
	public String showSuppliersDetailsPage(@RequestParam(name = "suppliersId", required = false) String suppliersId,
	        Model model) {
	    System.out.println(suppliersId);
	    model.addAttribute("suppliersId", suppliersId);
	    return "suppliers/suppliers_details";
	}


	@RequestMapping("/showContractsDetailsPage")
	public String showContractsDetailsPage(@RequestParam(name = "contractsId", required = false) String contractsId,
	        Model model) {
		return "contracts/contracts_details";
	}
	
	@RequestMapping("/goAddContracts")
	public String goAddContracts(@RequestParam(name = "suppliersId", required = false) String suppliersId,
	        Model model) {
	    model.addAttribute("suppliersId", suppliersId);
	    return "contracts/contracts_details_for_view_to_add";
	}
	
	
	
	
	//正融
	@GetMapping("/categories-edit")
	public String categoriesEdit() {
		return "/categories/categories-edit";
	}

	@GetMapping("/product-edit")
	public String productEdit() {
		return "/product/product-edit";
	}

	@GetMapping("/product-list")
	public String productList() {
		return "/product/product-list";
	}

	@GetMapping("/product-add")
	public String productAdd() {
		return "/product/product-add";
	}
	
	@GetMapping("/product-singlePage")
	public String productSinglePage() {
		return "/product/product-singlePage";
	}
}
