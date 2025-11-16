import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3F4F6", 
    padding: 24,
    justifyContent: "flex-start",
    marginTop: 120,
    borderTopLeftRadius: 24,   
    borderTopRightRadius: 24,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  iconSmall: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  headerSpacer: {
    width: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#111827",
  },

  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 12,
    backgroundColor: "#FFFFFF",
  },

  socialIcon: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },

  socialText: {
    marginLeft: 12,
    fontWeight: "600",
    color: "#111827",
  },

  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },

  separatorLine: {
    flex: 1,
    height: 1,
    backgroundColor: "#E5E7EB",
  },

  separatorText: {
    marginHorizontal: 8,
    fontSize: 12,
    color: "#9CA3AF",
    fontWeight: "500",
  },

  label: {
    fontSize: 12,
    fontWeight: "500",
    color: "#6B7280",
    marginBottom: 4,
  },

  input: {
    borderWidth: 1,
    borderColor: "#D1D5DB",
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
  },

  loginButton: {
    marginTop: 4,
    marginBottom: 16,
    borderRadius: 16,
    backgroundColor: "#E5E7EB",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
  },

  loginButtonText: {
    fontWeight: "600",
    color: "#6B7280",
  },

  footerText: {
    fontSize: 12,
    color: "#4B5563",
    textAlign: "center",
    marginBottom: 12,
  },

  footerLink: {
    fontWeight: "600",
    color: "#111827",
    textDecorationLine: "underline",
  },

  footerLinkCenter: {
    fontSize: 14,
    fontWeight: "600",
    color: "#111827",
    textAlign: "center",
    marginBottom: 8,
  },

    // segunda tela daqui pra baixo

  container2: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  header2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#CCF5D5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatarText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  tabs: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 24,
  },

  tabText: {
    fontSize: 16,
    color: '#4B5563',
  },

  activeTabWrapper: {
    alignItems: 'center',
  },

  activeTabText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
  },

  activeTabUnderline: {
    marginTop: 4,
    height: 3,
    width: 70,
    borderRadius: 2,
    backgroundColor: '#111827',
  },

  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 32,
    paddingTop: 48,
  },

  mainImage: {
    width: 260,
    height: 260,
    marginBottom: 32,
  },

  title2: {
    fontSize: 20,
    fontWeight: '700',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 12,
  },

  description: {
    fontSize: 14,
    color: '#4B5563',
    textAlign: 'center',
    lineHeight: 20,
    marginBottom: 24,
  },

  primaryButton: {
    backgroundColor: '#E60023',
    borderRadius: 24,
    paddingHorizontal: 32,
    paddingVertical: 12,
  },

  primaryButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    fontSize: 14,
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderTopWidth: 0.4,
    borderTopColor: '#D1D5DB',
    backgroundColor: '#FFFFFF',
  },

  footerIcon: {
    width: 28,
    height: 28,
    resizeMode: 'contain',
  },

});