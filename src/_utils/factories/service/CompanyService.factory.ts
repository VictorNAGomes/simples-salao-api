import { GetAllCompaniesService } from "src/company/domain/service/GetAllCompanies.service";
import { GetOneCompanyService } from "src/company/domain/service/GetOneCompany.service";
import { updateCompanyService } from "src/company/domain/service/UpdateCompany.service";
import { CompanyRepositoryFactory } from "../repository/CompanyRepository.factory";

export class CompanyServiceFactory {
  static createGetAllCompanyService() {
    return new GetAllCompaniesService(CompanyRepositoryFactory.make());
  }
  static createUpdateCompanyService() {
    return new updateCompanyService(CompanyRepositoryFactory.make());
  }
  static createGetOneCompanyService() {
    return new GetOneCompanyService(CompanyRepositoryFactory.make());
  }
}
