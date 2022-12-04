import { CafeComment } from "./CafeComment";
import { Server } from "./SERVER";
import { CafeSettings } from "./Settings";
import { UIInput } from "./UIInput";


// CafeMessageDisplay is responsible for rendering a Message communication entity.
export class CafeMessageDisplay extends UIInput<Server.Message> {

    displayedText: HTMLDivElement

    // updateMessage changes the message which is shown.
    updateMessage(d:Server.Message) {}

    // clearMessage clears the currently displayed message.
    clearMessage() {}

}

// CafeUserDisplay displays UserProfile communication entity data with HTML Elements.
export class CafeUserDisplay extends UIInput<Server.UserProfile> {
    Username: HTMLDivElement;
    CreatedOn: HTMLDivElement
    DomainsModerating: HTMLDivElement;
    IsAdmin: HTMLDivElement;
    IsDomainModerator: HTMLDivElement;
    IsGlobalModerator: HTMLDivElement;
    ProfileBlurb: HTMLDivElement;
    // changeProfile loads new user data to display.
    changeProfile(d: Server.UserProfile) {}

    // hide hides the CafeUserDisplay.
    hide() {}

    // show shows the CafeUserDisplay
    show() {}
}

// CafeFeedbackDisplay displays a feedback record for an admin to view.
export class CafeFeedbackDisplay extends UIInput<Server.FeedbackRecord> {
    Content: HTMLDivElement;
    Hide: HTMLDivElement;
    SubmittedAt: HTMLDivElement;
    FeedbackType: HTMLDivElement;
    Username: HTMLDivElement;

    ToggleHidden: HTMLButtonElement

    // called when a user clicks the toggleHidden button, which results in the sending of a ChangeFeedback event to the server.
    hideClicked() {

    }

}

// CafeOwnProfileDisplay is used to display a User's own profile to them.
export class CafeOwnProfileDisplay extends UIInput<Server.UserProfile> {
    Username: HTMLDivElement;
    CreatedOn: HTMLDivElement
    DomainsModerating: HTMLDivElement;
    IsAdmin: HTMLDivElement;
    IsDomainModerator: HTMLDivElement;
    IsGlobalModerator: HTMLDivElement;
    ProfileBlurb: HTMLDivElement;

    editProfileBlurbButton: HTMLButtonElement
    editProfileTextarea: HTMLTextAreaElement
    editProfileSubmitButton: HTMLButtonElement 
    changePasswordButton: HTMLButtonElement

    // updateProfile is called when a user's profile changes. It updates HTML elements accordingly.
    updateProfile(d:Server.UserProfile) {

    }

    // editProfileBlurbClicked is called when the editProfileBlurbButton is clicked. It displays the editProfileTextArea element for user input.
    editProfileBlurbClicked() {}

    // editProfileSubmitButtonClicked is called when the editProfileSubmitButton is clicked. It ultimately results in the sending of a ChangeProfileBlurb event to the server.
    editProfileSubmitClicked() {}
}

// CafeBanRecordDisplay displays an individual ban or unban record.
export class CafeBanRecordDisplay extends UIInput<Server.BanRecord> {
    BannedFrom: HTMLDivElement;
    BannedUsername: HTMLDivElement;
    BannedByUsername: HTMLDivElement;
    SetBannedTo: HTMLDivElement;
    BannedAt: HTMLDivElement;
    Reason: HTMLDivElement;
    
    // bannedUserClicked is called when the bannedUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    bannedUserClicked(ev:MouseEvent) {}
    // bannedByClicked is called when the BannedByUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    bannedByClicked(ev:MouseEvent) {}
}

// CafeCommentReportDisplay displays data for a single CommentReport.
export class CafeCommentReportDisplay extends UIInput<Server.CommentReport> {
    ActionTaken: HTMLDivElement;
    CommentData: CafeComment;
    ReasonReported: HTMLDivElement;
    ReportingUsername: HTMLDivElement;
    TimeReported: HTMLDivElement;

    moderateButton: HTMLButtonElement
    setHiddenTo: HTMLInputElement
    setRemovedTo: HTMLInputElement
    reason: HTMLTextAreaElement
    submitModerationButton: HTMLButtonElement

    // reportingUserClicked is called when the ReportingUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    reportingUserClicked(ev:MouseEvent) {}
    
    // moderateButtonClicked is called when a user clicks on this.moderateButton. It causes the moderation controls to become visible.
    moderateButtonClicked() {

    }

    // submitModerationButton is called when a user clicks on this.submitModerationButton. It causes a new Moderate object to be dispatched to the server.
    submitModerationButtonClicked() {

    }
}

// CafeLogDisplay displays data from a single AdminAccessLog
export class CafeLogDisplay extends UIInput<Server.AdminAccessLog> {
    Ip: HTMLDivElement;
    Url: HTMLDivElement;
    Username: HTMLDivElement;

    // usernameClicked is called when the ReportingUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    usernameClicked(ev:MouseEvent) {

    }
}

// CafeModRecordDisplay displays data from a ModerationRecord.
export class CafeModRecordDisplay extends UIInput<Server.ModerationRecord> {
    AssociatedReport?: CafeCommentReportDisplay;
    ModeratorUsername: HTMLDivElement;
    Reason: HTMLDivElement;
    SetHiddenTo: HTMLDivElement;
    SetRemovedTo: HTMLDivElement;
    TimeModerated: HTMLDivElement;
    // moderatorUsernameClicked is called when the ModeratorUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    moderatorUsernameClicked(ev: MouseEvent) {}
}

// CafeGlobalModDisplay renders data from a GlobalModeratorRecord.
export class CafeGlobalModDisplay extends UIInput<Server.GlobalModeratorRecord> {
    GrantedAt: HTMLDivElement;
    GrantedByUsername: HTMLDivElement;
    GrantedToUsername: HTMLDivElement;

    // grantedByUsernameClicked is called when the GrantedByUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    grantedByUsernameClicked(ev:MouseEvent) {    }
    // grantedToUsernameClicked is called when the GrantedToUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    grantedToUsernameClicked(ev:MouseEvent) {     }

}

// CafeDomainModDisplay displays data for a DomainModeratorRecord.
export class CafeDomainModDisplay extends UIInput<Server.DomainModeratorRecord> {
    Domain: HTMLDivElement;
    GrantedAt: HTMLDivElement;
    GrantedByUsername: HTMLDivElement;
    GrantedToUsername: HTMLDivElement;
    // grantedByUsernameClicked is called when the GrantedByUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    grantedByUsernameClicked(ev:MouseEvent) {    }
    // grantedToUsernameClicked is called when the GrantedToUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    grantedToUsernameClicked(ev:MouseEvent) {     }
}

// CafeDomainReportDisplay displays data from an AdminDomainReport object.
export class CafeDomainReportDisplay extends UIInput<Server.AdminDomainReport> {
    Domain: HTMLDivElement;
    CommentCount: HTMLDivElement;
    xButton: HTMLButtonElement

    // xButtonClicked is called when the user clicks the xButton element. It calles this.destroy() to remove the CafeDomainReportDisplay, since the user is done viewing it.
    xButtonClicked() {}
}

// CafeUsersReportsDisplay displays data from an AdminUsersReport object.
export class CafeUsersReportDisplay extends UIInput<Server.AdminUsersReport> {
    LoggedInUserCount: HTMLDivElement;
    NewestUsername: HTMLDivElement;
    UserCount: HTMLDivElement;
    // newestUserClicked is called when the NewestUsername div is clicked. It will result in the server getting userprofile data for that user, the front end populating a UserProfileDisplay with the data, and the UserProfileDisplay being moved to where the user's mouse is.
    newestUserClicked(ev:MouseEvent) {

    }

    // updateUsersReport is called when Cafe receives an AdminUsersReport. It updates the displayed information in CafeUsersReport.
    update(data: Server.AdminUsersReport) {}
}

// CafeCommentSortDisplay shows the users comment viewing settings and allows the user to change them.
export class CafeCommentSortDisplay extends UIInput<CafeSettings> {
    sortBy: HTMLSelectElement
    viewHidden: HTMLInputElement
    sortAscending: HTMLInputElement

    // settingChange is caused when a user changes any of the input fields, for example, by checking "sortAscending". It dispatches an event populated with data extracted from its input elements, listened to by Cafe, that will cause the Settings object to change and the changes to be realized around the front end.
    settingChange() {

    }

    // updateFromSettings causes the input elements to change to values set from a Settings object.
    updateFromSettings(settings:CafeSettings) {
        
    }
}
