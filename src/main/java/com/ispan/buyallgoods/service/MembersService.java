package com.ispan.buyallgoods.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ispan.buyallgoods.model.Members;
import com.ispan.buyallgoods.repository.MembersRepository;

@Service
public class MembersService {

	@Autowired
	private MembersRepository membersRepository;

	public Members findMembersByIdForAddS(Integer id) {
		Optional<Members> optional = membersRepository.findById(id);
		if (optional.isPresent()) {
			Members members = optional.get();
			return members;
		} else {
			return null;
		}
	}

	//for新增廠商頁面的會員代號下拉選單
	public List<Object> findAllMembers() {
		List<Object> allMemberId = membersRepository.getAllMemberId();

		if (allMemberId == null) {
			return null;
		}
		return allMemberId;
	}

	public List<Object> findOneByMemberId(Integer membersId) {
		List<Object> oneByMemberId = membersRepository.getOneByMemberId(membersId);
		
		if(oneByMemberId==null) {
			return null;

		}
		return oneByMemberId;

		}
	
}
