package com.project4.bookonline.dto;

import com.project4.bookonline.Model.Voucher;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Basic;
import javax.persistence.Column;

@Getter
@Setter
@NoArgsConstructor
public class VoucherDTO {
    private String voucherid;
    private String vouchertitle;
    private String voucherdescription;
    private int voucherstatus;
    private int vouchervalue;
    private String voucherfrom;
    private String voucherto;
    private int voucherused;

    public Voucher convert(VoucherDTO dto){
        Voucher voucher = new Voucher();
        voucher.setVoucherid(dto.getVoucherid());
        voucher.setVouchertitle(dto.getVouchertitle());
        voucher.setVoucherdescription(dto.getVoucherdescription());
        voucher.setVoucherstatus(1);
        voucher.setVoucherfrom(dto.getVoucherfrom());
        voucher.setVoucherto(dto.getVoucherto());
        voucher.setVouchervalue(dto.getVouchervalue());
        voucher.setOrdersCollection(null);
        voucher.setVoucherused(dto.getVoucherused());
        return voucher;
    }
}
