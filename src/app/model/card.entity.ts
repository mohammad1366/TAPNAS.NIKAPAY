export class Card {
  public Id: number;
  public ParentId: number;
  public CardTypeId: number;
  public CardSerialNumber: number;
  public Card16DigitNumber: number;
  public Cvv2: number;
  public Pin: number;
  public Pin2: number;
  public ExpierDate: Date;
  public IsActive: Boolean;
  public LastBalance: number;
  public Comment: String;
  public CreatorId: number;
  public CreateOn: Date;
  public LastModifierId: number;
  public LastModifiedDate: Date;
  public CardTypeTitle: String;
  public PersianExpierDate: string;
  public PersianCreateOn: String;
  public LastBalanceTitle: String;
}
